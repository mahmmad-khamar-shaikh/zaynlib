import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User, Roles } from '../../types/customTypes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isError = false;
  public customErrorMessage: string;
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private fb: FormBuilder,     // {3}
    private authService: AuthService,
    private router: Router// {4}
  ) { }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.authService.login(this.form.value).then(res => {
        console.log('response', res);
        this.authService.loggedInUser = new User();
        this.authService.loggedInUser.Id = res.user.uid;
        this.authService.loggedInUser.Name = res.user.displayName;
        this.authService.loggedInUser.email = res.user.email;
        this.authService.loggedInUser.role = new Roles();
        if (res.user.email.toLowerCase() === 'admin@gmail.com') {
          this.authService.loggedInUser.role.subscriber = false;
          this.authService.loggedInUser.role.admin = true;
          this.authService.loggedInUser.role.superAdmin = true;
        } else {
          this.authService.loggedInUser.role.subscriber = true;
          this.authService.loggedInUser.role.admin = false;
          this.authService.loggedInUser.role.superAdmin = false;
        }

        this.router.navigate(['/dashboard']);
        this.isError = false;
      })
        .catch(err => {
          console.log('err=>', err);
          this.customErrorMessage = 'Username or Password incorrect.';
          this.isError = true;
        });

    }
    this.formSubmitAttempt = true;             // {8}
  }
  loginWithGoogle() {

    console.log(this.form.value);
    this.authService.signinWithGoogle().then((res) => {
      console.log('firstGot----------->', res);
      this.router.navigate(['/dashboard']);
    }
    ).catch((err) => {
      console.log('error', err);
    });




  }
}
