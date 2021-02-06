import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import {NgForm, NgModel} from '@angular/forms';
import { DataService } from '../data/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  singleModel="On";

  startDate: Date;
  userSettings : UserSettings = {...this.originalUserSettings};
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
     this.subscriptionTypes = this.dataService.getSubscriptionTypes();

     this.startDate = new Date();
  }

  onHttpError(errorResponse: any){
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.value);
  //  console.log('in onSubmit: ', form.valid);
  //   if (form.valid){
  //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
  //     result => console.log('success: ', result),
  //     error => this.onHttpError(error)
  //   );
  // }
  //   else{
  //     this.postError = true;
  //     this.postErrorMessage = "Please fix the above errors"
  //   }
  }

  //for response https://putsreq.com/kG05mNHAor3ccbrzTcXI
  // https://putsreq.com/kG05mNHAor3ccbrzTcXI/inspect

  onBlur(field : NgModel){
    console.log('in onBlur: ', field.valid);
  }
}
