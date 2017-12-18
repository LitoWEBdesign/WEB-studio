import {Component,ViewChild} from '@angular/core';
import {TwentysixtyComponent} from './2016/2016.component';
import {TwentyfiftyComponent} from './2015/2015.component';



@Component({
    selector:'quality',
    templateUrl:'./quality.component.html',
    styleUrls:['quality.component.css']
})

export class QualityComponent{
 @ViewChild(TwentyfiftyComponent)
 private year1:TwentyfiftyComponent;
 @ViewChild(TwentysixtyComponent)
 private year2:TwentysixtyComponent
  showblock1(){
      this.year2.disable2();
      this.year1.show1();
    
  }
  showblock2(){
      this.year1.disable1();
      this.year2.show2();
  }
}

