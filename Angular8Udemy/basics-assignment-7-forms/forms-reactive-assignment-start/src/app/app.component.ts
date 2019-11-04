import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {duplicateNameValidator, duplicateNameValidatorAsync} from './app.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.projectForm = fb.group({
      name: [null, [Validators.required], duplicateNameValidatorAsync], // duplicateNameValidator
      mail: [null, Validators.required],
      status: null
    });
  }

  ngOnInit(): void {
    this.projectForm.controls.status.setValue('Stable');
  }

  public submitForm() {
    Object.keys(this.projectForm.controls).forEach((key) => {
      console.log(key + '-' + this.projectForm.controls[key].value);
    });
  }

}
