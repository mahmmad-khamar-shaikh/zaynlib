import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/login/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {
  public isAdmin = false;
  constructor(private router: Router,
    private _authService: AuthService,
    private _toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.isAdmin = this._authService && this._authService.loggedInUser &&
      this._authService.loggedInUser.role && this._authService.loggedInUser.role.admin;
  }
  logout() {
    this._toastrService.info('You are logout successfully.', 'Logout', { positionClass: 'toast-top-center' })
    this.router.navigate(['']);
  }
}
