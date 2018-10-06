import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';
import {Router} from '@angular/router';
import {CommonService} from '../../../services/common.service'

@Component({
  selector: 'app-alerts-details',
  templateUrl: './alerts-details.component.html',
  styleUrls: ['./alerts-details.component.scss']
})
export class AlertsDetailsComponent implements OnInit {
 hideAction:boolean = false;
  constructor(
    public dialog: MatDialog,
    private router:Router,
    private service:CommonService

  ) {}


  ngOnInit() {
    this.service.showHeaderFooter(true,false,false);

  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  showClose(){
    this.hideAction = true;
    document.getElementById('closeSection').style.display="block";
  }
}
