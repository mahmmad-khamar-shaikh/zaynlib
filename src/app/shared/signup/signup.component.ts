import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public isError = false;
  public customErrorMessage: string;
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}
  constructor(private fb: FormBuilder,     // {3}
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
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
      this.authService.signUp(this.form.value).then(res => {
        console.log('response', res);
        this.router.navigate(['/home']);
        this.isError = false;
      })
        .catch(err => {
          console.log('err=>', err);
          this.customErrorMessage = err;
          this.isError = true;
        });

    }
    this.formSubmitAttempt = true;             // {8}
  }
}
