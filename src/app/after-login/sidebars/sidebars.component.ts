import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {Router} from '@angular/router';
@Component({
  selector: 'app-sidebars',
  templateUrl: './sidebars.component.html',
  styleUrls: ['./sidebars.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SidebarsComponent implements OnInit {

  action = [
    {value: 'Close', viewValue: 'Close'},
    {value: 'F-Positive', viewValue: 'F-Positive'},
  ];
  isBell = true;
  isCamera=false;
  isRooms= false;

 showAlert = true;
 showAlerDetail=false;
 showCamera =false;
 showRoom=false;
 editProfile = false;

 // dummy data for notification
 notification = [
   {id:1,title:"A positive fall alert in the room: C002", date:"03-08-2018",time:"8:00 PM",isActive:true},
   {id:2,title:"Floor 2 Under maintenance for Next week", date:"03-08-2018",time:"8:00 PM",isActive:false},
   {id:3,title:"Floor 2 Under maintenance for Next week", date:"03-08-2018",time:"8:00 PM",isActive:false},
   {id:4,title:"Floor 2 Under maintenance for Next week", date:"03-08-2018",time:"8:00 PM",isActive:false},
   {id:5,title:"Floor 2 Under maintenance for Next week", date:"03-08-2018",time:"8:00 PM",isActive:false},
   {id:6,title:"Floor 2 Under maintenance for Next week", date:"03-08-2018",time:"8:00 PM",isActive:false},
   {id:7,title:"Floor 2 Under maintenance for Next week", date:"03-08-2018",time:"8:00 PM",isActive:false},
   {id:8,title:"Floor 2 Under maintenance for Next week", date:"03-08-2018",time:"8:00 PM",isActive:false},
   {id:9,title:"Floor 2 Under maintenance for Next week", date:"03-08-2018",time:"8:00 PM",isActive:false},
   {id:10,title:"Floor 2 Under maintenance for Next week",date:"03-08-2018",time:"8:00 PM",isActive:false},
 ];

 // dummy data for camera tab
 camera =[
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:true},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false}
];

 // dummy data for room tab
 room =[
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:true},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false},
  {camera:'#F1-002',room:'Room: #212',floor:'Floor: Main Floor',isActive:false}
];

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
 

  }

  sideMenu(option){
    switch(option){
      case 1:{
        this.isBell = true;
        this.isCamera=false;
        this.isRooms= false;
        this.editProfile = false;

        document.getElementById('test-swipe-3').style.display='block';
        document.getElementById('test-swipe-4').style.display='none';
        document.getElementById('test-swipe-5').style.display='none';
        break;
      }
      case 2:{
        this.isBell = false;
        this.isCamera=true;
        this.isRooms= false;
        this.editProfile = false;

        // document.getElementById('ab').style.transition = '0.45s';
        document.getElementById('test-swipe-3').style.display='none';
        document.getElementById('test-swipe-4').style.display='block';
        document.getElementById('test-swipe-5').style.display='none';

        break;
      }
      case 3:{
        this.isBell = false;
        this.isCamera=false;
        this.isRooms= true;
        this.editProfile = false;

        document.getElementById('test-swipe-3').style.display='none';
        document.getElementById('test-swipe-4').style.display='none';
        document.getElementById('test-swipe-5').style.display='block';
        break;
      }

    }

  }

  goToAlertDetail(option,index){
    switch(option){
      case 'bell':{
        this.notification[index].isActive = true;
      for(var i=0;i<this.notification.length;i++){
        if(i==index){
          this.notification[i].isActive = true;
        }else{
          this.notification[i].isActive = false;
        }
      }
       this.router.navigate(['/alert_detail'])
        break;
      }
      case 'camera':{
        for(var i=0;i<this.camera.length;i++){
          if(i==index){
            this.camera[i].isActive = true;
          }else{
            this.camera[i].isActive = false;
          }
        }
        this.router.navigate(['/camera']);
        break;
      }
      case 'room':{
        for(var i=0;i<this.room.length;i++){
          if(i==index){
            this.room[i].isActive = true;
          }else{
            this.room[i].isActive = false;
          }
        }
        this.router.navigate(['/room']);
        break;
      }
    }
   
  }
  closeSideBar(){
    document.getElementById('main-body').classList.remove('mobile-ntifcation-section');
    document.getElementById('close-btn-side').style.display = 'none';
  };

}
