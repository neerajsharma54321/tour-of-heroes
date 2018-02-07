import { Component } from '@angular/core';

@Component({
    selector : 'sidemenu',
    templateUrl : './sidemenu-component.html',
    styleUrls : ['./sidemenu.component.css']
})
export class SidemenuComponent{
    constructor(){
        console.log("cons of header component");
    }
}