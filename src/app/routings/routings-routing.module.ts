import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AlertsComponent} from './alerts/alerts.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {AlertsDetailsComponent} from './alerts-details/alerts-details.component';
import {RoomsComponent} from './rooms/rooms.component';
import {CameraComponent} from './camera/camera.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'alert',
        component: AlertsComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'alert_detail',
        component: AlertsDetailsComponent
    }, {
        path: 'room',
        component: RoomsComponent
    },
    {
        path: 'camera',
        component: CameraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutingsRoutingModule {
}
