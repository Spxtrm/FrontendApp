import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {CommonService} from '../../services/common.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        private router: Router,
        private service: CommonService
    ) {
    }

    canActivate() {
        if (localStorage.getItem('isToken')) {
            console.log('hello', localStorage.getItem('isToken'));
            // logged in so return true
            return false;
        } else {
            this.router.navigate(['/']);
            return true;
        }


    }


}
