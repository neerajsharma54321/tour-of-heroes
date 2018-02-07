import { Component } from '@angular/core';
import { ExpiredStorage } from 'expired-storage';

@Component({
    selector : 'page-not-found',
    templateUrl : './pageNotFound.component.html'
})
export class PageNotFoundComponent{
     expiredStorage : ExpiredStorage;
    
    constructor(){
        console.log("cons of header component");
        this.expiredStorage = new ExpiredStorage('');
    }
}