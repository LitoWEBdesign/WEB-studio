import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TwentyfiftyComponent} from './2015/2015.component';
import {TwentysixtyComponent} from './2016/2016.component';


@NgModule({
    imports:[CommonModule],
    declarations:[TwentyfiftyComponent,TwentysixtyComponent],
    exports:[TwentyfiftyComponent,TwentysixtyComponent]
})

export class QualityModule{}