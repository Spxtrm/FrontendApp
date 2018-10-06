import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';


@Injectable()

export class CommonService {
    public isHeaderFooter = new BehaviorSubject<boolean>(null);
    public isAlert = new BehaviorSubject<boolean>(null);
    public isDashboard = new BehaviorSubject<boolean>(null);
    public isUserSaved = new BehaviorSubject<boolean>(null);


    constructor() {
    }

    showHeaderFooter(newVal, alert, dashboard) {
        console.log('COMMON SERVICE isProfile', newVal);
        this.isHeaderFooter.next(newVal);
        this.isAlert.next(alert);
        this.isDashboard.next(dashboard);
    }

    isUserSignup(userStatus) {
        this.isUserSaved.next(userStatus);
    }

}