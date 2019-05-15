import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public formPay : FormGroup;
  public public_key = 'pk_test_9666c734e6e096c310b4782785df5b6b389fb7a9'; //Put your paystack Test or Live Key here
  public channels = ['bank', 'card', 'ussd', 'qr']; //Paystack Payment Methods
  public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number

  constructor(public navCtrl: NavController, private formBuilder:FormBuilder) {
    this.formPay = this.formBuilder.group({
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      amount: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  //Callback function on successful payment 
  paymentDone(ref: any) {
    console.log(ref) //ref contains the response from paystack after successful payment
  }

  //Event triggered if User cancel the payment
  paymentCancel() {
    console.log('gateway closed')
  }

}
