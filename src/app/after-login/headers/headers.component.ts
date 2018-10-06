import { Component, OnInit, ElementRef} from '@angular/core';
import { CommonService } from '../../../services/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  isSearch =false;
  isProfile = false;
  count =0;

  constructor(
    private eRef: ElementRef,
    private router:Router,
    private service:CommonService

  ) {}

  ngOnInit() {
  }

  openProfileOption(){
        this.isProfile =!this.isProfile;
  }
  ViewProfile(){
    this.isProfile = false;
    this.router.navigate(['/profile']);
  }
  logout(){
    // this.isProfile = false;
    this.service.isUserSignup(true);
    this.router.navigate(['/']);
  }
  show_search(){
    document.getElementById('seach-Section').style.display = 'block';
    this.isSearch = true;
  }
  close_search(){
    document.getElementById('seach-Section').style.display = 'none';
    this.isSearch = false;

  }
  onClickedOutside(e: Event) {
    this.isProfile =false;
  }
}
