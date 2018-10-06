import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../../services/common.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private router:Router,
    private service: CommonService,

  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(true,false,false);
  }

  
}
