import { Component } from '@angular/core';

@Component({
    selector : 'layout',
    templateUrl : './layout.component.html'
})
export class LayoutComponent{
    constructor(){
        console.log("cons of layout component");
    }
}