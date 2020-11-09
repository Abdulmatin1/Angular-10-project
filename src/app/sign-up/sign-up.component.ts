import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpService, AuthResponseData } from './sign-up.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent   {

  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private signUpService: SignUpService, private rout: Router) {}


  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.signUpService.login(email, password);
    } else {
      authObs = this.signUpService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.rout.navigate(['/fireBase-crud']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
