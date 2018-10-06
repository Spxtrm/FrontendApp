import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../../services/common.service'

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  
  constructor(
    private router:Router,
    private service: CommonService,

  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(true,false,false);
  }
  
}
