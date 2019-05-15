import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    Angular4PaystackModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePageModule {}