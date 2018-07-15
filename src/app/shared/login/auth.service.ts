import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    login(value: any) {
        if (value && value.userName && value.password &&
            value.userName === 'admin@gmail.com' && value.password === 'admin') {
            return true;
        }
    }

}
