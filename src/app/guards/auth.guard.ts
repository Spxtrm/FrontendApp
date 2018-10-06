import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {CommonService} from '../../services/common.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private service: CommonService
    ) {
    }

    canActivate() {

        if (localStorage.getItem('isToken')) {
            console.log('hello', localStorage.getItem('isToken'));
            // this.service.showHeaderFooter(true);

            // logged in so return true
            return true;
        } else {
            this.router.navigate(['/']);
            // this.service.showHeaderFooter(false);

            return false;
        }


    }


}
