import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
*/

import { HeaderService } from '../service/header.service';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { MainComponent } from './main.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
//:;
@NgModule({
    imports :[CommonModule],
    declarations :[
        MainComponent,
        AboutUsComponent,
        DashboardComponent,
        ReportComponent,
        PageNotFoundComponent
    ],
    providers:[
        HeaderService
    ],
    exports:[
        MainComponent,
        AboutUsComponent,
        DashboardComponent,
        ReportComponent,
        PageNotFoundComponent
    ]
})

export class MainModule{

}