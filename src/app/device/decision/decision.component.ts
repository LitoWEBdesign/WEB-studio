import {Component,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


@Component({
    moduleId:module.id,
    selector:'decision',
    templateUrl:'decision.component.html',
    styleUrls:['decision.component.css']
})
 export class DecisionComponent{
    private id:number;
    private routerSubscription:Subscription;
    constructor(private route:ActivatedRoute){
       this.routerSubscription = route.params.subscribe(params=>this.id=params['id']);
    }
    ngOnDestroy(){
       this.routerSubscription.unsubscribe();
   }
 }