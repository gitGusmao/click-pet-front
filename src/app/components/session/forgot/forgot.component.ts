import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  isCompleted: boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  @ViewChild('stepper') private stepper: MatStepper;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.secondFormGroup = this._formBuilder.group({
      code: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  checkEmail() {
    this.isCompleted = false;
    this.stepper.next();
  }
}
