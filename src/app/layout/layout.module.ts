import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderService } from '../service/header.service';
import { RouterModule } from '@angular/router';
//:;
@NgModule({
    imports :[
                CommonModule,
                RouterModule
            ],
    declarations :[
        LayoutComponent,
        HeaderComponent,
        SidemenuComponent,
        FooterComponent
    ],
    providers:[
        HeaderService
    ],
    exports:[
        LayoutComponent,
        HeaderComponent,
        SidemenuComponent,
        FooterComponent 
    ]
})

export class LayoutModule{

}