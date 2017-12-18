import {NgModule} from '@angular/core';
import {RouterModule,Route} from '@angular/router';
import {NewsComponent} from './news.component';
import {News1Component} from './news1/news1.component';
import {News2Component} from './news2/news2.component';
import {News3Component} from './news3/news3.component';
import {SliderComponent} from '../slider/slider.component';


@NgModule({
    imports:[RouterModule.forChild([
        {path:"",component:SliderComponent},
       {path:"news",component:NewsComponent,children:
       [{path:"news1",component:News1Component},
       {path:"news2",component:News2Component},
       {path:"news3",component:News3Component},
    ]},
       
       
    ])],
    exports:[RouterModule]
})

export class NewsRoute{}