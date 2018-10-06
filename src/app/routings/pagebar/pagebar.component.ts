import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-pagebar',
  templateUrl: './pagebar.component.html',
  styleUrls: ['./pagebar.component.scss']
})
export class PagebarComponent implements OnInit {
  alert =false;
  dashboard = false;
  constructor(
    private router:Router,
    private service:CommonService
  ) { }

  ngOnInit() {
    this.service.isAlert.subscribe((res:any)=>{
      this.alert = res;
    })

    this.service.isDashboard.subscribe((res:any)=>{
      this.dashboard = res;
    })
  }
  goToDashboard(){
      this.router.navigate(['/dashboard']); 
  }
  goToAlert(){
      this.router.navigate(['/alert']);
  }

  openSideBar(){
    document.getElementById('main-body').classList.add('mobile-ntifcation-section');
    document.getElementById('close-btn-side').style.display = 'block';
  };
  
  
}
