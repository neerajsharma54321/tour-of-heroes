import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutUsComponent } from './component/aboutus/aboutus.component';
import { ReportComponent } from './component/report/report.component';
import { PageNotFoundComponent } from './component/pageNotFound/pageNotFound.component';


export const appRoutes : Routes=[
        {
            path:"",redirectTo:"/dashboard",pathMatch:"full"
        },
        {
            path:"home",redirectTo:"/dashboard",pathMatch:"full"
        },
        {
            path:"dashboard",component:DashboardComponent
        },
        {
            path:"about-us",component:AboutUsComponent
        },
        {
            path:"report",component:ReportComponent
        },
        {
            path:"**",component:PageNotFoundComponent
        }

    ];