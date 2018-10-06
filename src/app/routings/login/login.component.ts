import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../../services/common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    isUserSaved = false;
    email: any;

    constructor(
        private router: Router,
        private service: CommonService,
    ) {
    }

    ngOnInit() {
        this.aboutUser();
        this.hideHeaderFooter();
    }

    aboutUser() {
        this.service.isUserSaved.subscribe((res: any) => {
            if (res == null) {
                this.isUserSaved = false;
            } else {
                this.isUserSaved = res;
            }
        });
    }

    hideHeaderFooter() {
        this.service.showHeaderFooter(false, false, false);
    }

    login() {
        localStorage.setItem('user', this.email);
        this.router.navigate(['/alert']);
    }

    otherlogin() {
        localStorage.removeItem('user');
        this.service.isUserSignup(false);
        this.router.navigate(['/']);

    }
}
