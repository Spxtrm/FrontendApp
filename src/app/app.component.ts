import {Component, OnInit,} from '@angular/core';
import {CommonService} from '../services/common.service';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';
import {NgwWowService} from 'ngx-wow';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showload: boolean;

    isHeader: boolean = false;

    constructor(
        private service: CommonService,
        private router: Router,
        private wowService: NgwWowService
    ) {
        this.router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                this.wowService.init();
                this.showload = true;
            }
            if (route instanceof NavigationEnd) {
                this.showload = false;
            }
        });
    }

    ngOnInit() {
        this.getUserEmail();

        setTimeout(() => {
            this.service.isHeaderFooter.subscribe((res: any) => {
                this.isHeader = res;
            });
            var lastSegment = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
            if (lastSegment == '') {
                this.isHeader = false;
            }
        }, 0);

    }

    getUserEmail() {
        if (localStorage.getItem('user') != null) {
            this.service.isUserSignup(true);
        } else {
            this.service.isUserSignup(false);
        }
    }

}
