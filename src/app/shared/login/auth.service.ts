import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { IUser } from '../../types';
@Injectable()
export class AuthService {
    public loggedInUser: IUser;
    user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    constructor(private _angularFireAuth: AngularFireAuth, private router: Router) {
        this.user = _angularFireAuth.authState;
        this.user.subscribe(
            (user) => {
                if (user) {
                    this.userDetails = user;
                    console.log('userDetails --->', this.userDetails);
                } else {
                    this.userDetails = null;
                }
            }
        );
    }
    login(value: any): Promise<firebase.auth.UserCredential> {
        if (value && value.userName && value.password) {
            return this._angularFireAuth
                .auth
                .signInAndRetrieveDataWithEmailAndPassword(value.userName, value.password);

        }
    }

    signUp(value: any): Promise<firebase.auth.UserCredential> {
        return this._angularFireAuth.auth.createUserWithEmailAndPassword(value.userName, value.password);
    }

    signinWithGoogle(): Promise<firebase.auth.UserCredential> {

        return this._angularFireAuth.auth.signInWithPopup(
            new firebase.auth.GithubAuthProvider()
        );

    }


    isLoggedIn() {
        if (this.userDetails == null) {
            return false;
        } else {
            return true;
        }
    }
    logout() {
        this._angularFireAuth.auth.signOut()
            .then((res) => this.router.navigate(['/']));
    }
}


