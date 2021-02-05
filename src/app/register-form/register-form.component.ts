import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateValidators, ServerValidators } from '../validators/validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  namesField: FormControl = new FormControl(null, Validators.required, ServerValidators.dni);
  birthdayField: FormControl = new FormControl(null, [DateValidators.valid, DateValidators.max('2021-01-02')]);

  constructor() {
    this.registerForm = new FormGroup({
      names: this.namesField,
      lastnames: new FormControl(),
      gender: new FormControl(),
      birthday: this.birthdayField,
    });
  }

  ngOnInit(): void {
    console.log(this.registerForm);
  }

}
