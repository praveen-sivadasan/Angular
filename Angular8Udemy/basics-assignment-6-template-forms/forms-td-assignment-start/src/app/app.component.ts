import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('f')
  public myForm: NgForm;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() =>{
      this.myForm.form.patchValue({
        subscription: 'Basic'
      });
    }, 1000);
  }

  public submit() {
    console.log('E-mail =' + this.myForm.controls.mail.value);
    console.log('Subscription =' + this.myForm.controls.subscription.value);
    console.log('Password =' + this.myForm.controls.password.value);
  }
}
