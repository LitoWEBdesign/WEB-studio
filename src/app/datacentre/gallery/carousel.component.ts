
import {Component,Directive} from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'css-carousel',
  templateUrl:'carousel.component.html',
  styleUrls: ['carousel.component.css'],
})
export class CSSCarouselComponent {
  
	public images = IMAGES;
}

var IMAGES: Image[] = [
	{ "title": "Хол", "url": "assets/images/20130923_083027.jpg" },
	{ "title": "Загальний вхід в дата-центр", "url": "assets/images/20130923_081936.jpg" },
	{ "title": "Система газового об'ємного пожежогасіння ", "url": "assets/images/20130923_082046.jpg" },
	{ "title": "Розташування шаф", "url": "assets/images/20130923_082130.jpg" },
	{ "title": "Резервування живлення", "url": "assets/images/20130923_082233.jpg" },	
	//{ "title": "АВР", "url": "assets/images/20130923_082329.jpg" },
	//{ "title": "Система вентиляції", "url": "assets/images/20130923_083741.jpg" },
	//{ "title": "Оптичний крос", "url": "assets/images/20130923_085810.jpg" },
	
];