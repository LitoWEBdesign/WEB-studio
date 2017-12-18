import {Component,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    moduleId:module.id,
    selector:'news',
    templateUrl:'./news.component.html',
    styleUrls:['news.component.css']
})

export class NewsComponent implements OnDestroy{
     private id:number;
     private routerSubscription:Subscription;
     constructor(private route:ActivatedRoute){
        this.routerSubscription = route.params.subscribe(params=>this.id=params['id']);
     }
     ngOnDestroy(){
        this.routerSubscription.unsubscribe();
    }
}