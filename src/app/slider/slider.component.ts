import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
 
@Component({
  selector: 'slider',
  templateUrl: 'slider.component.html',
  providers: [{provide: CarouselConfig, useValue: {interval: 5000, noPause: true}}],
  styleUrls:['slider.component.css']
})
export class SliderComponent {
}