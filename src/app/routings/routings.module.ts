import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoutingsRoutingModule} from './routings-routing.module';
import {AlertsComponent} from './alerts/alerts.component';
import {DialogComponent} from './dialog/dialog.component';
import {AlertsDetailsComponent} from './alerts-details/alerts-details.component';
import {ProfileComponent} from './profile/profile.component';
import {RoomsComponent} from './rooms/rooms.component';
import {CameraComponent} from './camera/camera.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {PagebarComponent} from './pagebar/pagebar.component';
import {NgwWowModule} from 'ngx-wow';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RoutingsRoutingModule,
        MatDialogModule,
        MatSelectModule,
        RouterModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        NgwWowModule,
        FormsModule
    ],
    declarations: [AlertsComponent, DialogComponent, AlertsDetailsComponent, ProfileComponent, RoomsComponent, CameraComponent, DashboardComponent, LoginComponent, PagebarComponent],
    entryComponents: [DialogComponent]
})
export class RoutingsModule {
}
