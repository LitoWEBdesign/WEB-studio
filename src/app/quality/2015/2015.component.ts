import {Component} from '@angular/core';

@Component({
    selector:'twentyfifty',
    templateUrl:'2015.component.html',
    styleUrls:['2015.component.css']
})

export class TwentyfiftyComponent {
    visible:boolean=false;
   
    show1(){
        this.visible=true;
    }
    disable1(){
        this.visible=false;
    }
}