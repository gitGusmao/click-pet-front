import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session/session.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  hide = true;
  formSignin: FormGroup;

  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formSignin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
    });
  }

  public signin() {
    this.sessionService.signin(this.formSignin.value).subscribe(
      (data) => {
        this.authService.setToken(data.headers.get('authorization').split(' ')[1]);
        this.router.navigate(['/partner']);
      },
      (error) => {
        console.log(error);
        this.snackBarService.error(
          'Error ao efetuar login',
          'Email ou senha inválidos'
        );
      }
    );
  }
}
