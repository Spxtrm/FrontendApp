import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
 
  constructor(
    private router:Router,
    private service: CommonService,

  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(true,false,false);

  }
  goToDashBoard(){
    this.router.navigate(['/dashboard']);
 }
  goToAlert(){
   this.router.navigate(['/alert']);
 }
}
