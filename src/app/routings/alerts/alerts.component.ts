import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';
import {Router} from '@angular/router';
import {CommonService} from '../../../services/common.service';

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {

    action = [
        {value: 'Close', viewValue: 'Close'},
        {value: 'F-Positive', viewValue: 'F-Positive'},
    ];

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private service: CommonService
    ) {
    }

    ngOnInit() {
        this.service.showHeaderFooter(true, true, false);
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}

