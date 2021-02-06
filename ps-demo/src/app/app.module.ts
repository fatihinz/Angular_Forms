import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import {HttpClientModule} from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
