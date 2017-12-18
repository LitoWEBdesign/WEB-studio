import {Component} from '@angular/core';

@Component({
    selector:'twentysixty',
    templateUrl:'2016.component.html',
    styleUrls:['2016.component.css']
})

export class TwentysixtyComponent {
     visible:boolean=false;
   
     show2(){
         this.visible=true;
     }
     disable2(){
        this.visible=false;
     }
}