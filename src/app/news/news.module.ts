import {NgModule} from '@angular/core';

import {News1Component} from './news1/news1.component';
import {RouterModule} from '@angular/router';
import {NewsRoute} from './news.routs';
import {NewsComponent} from './news.component';
import {News2Component} from './news2/news2.component';
import {News3Component} from './news3/news3.component';

@NgModule({
    imports:[RouterModule,NewsRoute],
    declarations:[News1Component,News2Component,News3Component],
   

})
export class NewsModule{}