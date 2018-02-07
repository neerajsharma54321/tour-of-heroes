import { Component } from '@angular/core';
import { HeaderService } from '../../service/header.service';

@Component({
    selector : 'header',
    templateUrl : './header-component.html'
})
export class HeaderComponent{
    menuData : any;
    constructor(private headerService : HeaderService){
        console.log("cons of header component");
        this.menuData = headerService.getMenuItems();
        console.log(this.menuData);
    }
}