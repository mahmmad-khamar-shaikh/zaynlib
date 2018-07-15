import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '../../../../node_modules/@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      if (this.authService.login(this.form.value)) {
        console.log('indise logged in');
        this.router.navigate(['/dashboard']);
      } // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }
}
