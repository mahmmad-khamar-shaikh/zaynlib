import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/login/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private _authService: AuthService) { }
  ngOnInit() {
  }
  /**
   * Save User Profile.
   */
  saveUserProfile() {

  }

}
