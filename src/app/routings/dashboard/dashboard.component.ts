import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../../services/common.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(
        private router: Router,
        private service: CommonService
    ) {
    }

    ngOnInit() {
        this.service.showHeaderFooter(true, false, true);
    }

}
