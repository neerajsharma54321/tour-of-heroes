import { Component } from '@angular/core';

@Component({
    selector : 'about-us',
    templateUrl : './aboutus.component.html'
})
export class AboutUsComponent{
    constructor(){
        console.log("cons of header component");
    }
}