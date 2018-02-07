import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector : 'dashboard',
    templateUrl : './dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    constructor(){
        console.log("cons of dashboard component");
    }

    ngOnInit(){
        console.log("inside dashboard ng oninit");
    }
}