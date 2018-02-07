import { Component } from '@angular/core';

@Component({
    selector : 'report',
    templateUrl : './report.component.html'
})
export class ReportComponent{
    constructor(){
        console.log("cons of header component");
    }
}