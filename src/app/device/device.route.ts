import {NgModule} from '@angular/core';
import {RouterModule,Route} from '@angular/router';
import {DecisionComponent} from './decision/decision.component';
import {OmniPCXComponent} from './decision/omnipcx/omnipcx.component';
import {BranchComponent} from './decision/branch/branch.component';
import {MetropolisComponent} from './decision/metropolis/metropolis.component';

@NgModule({
    imports:[RouterModule.forChild([
        {path:'omnipcx',component:OmniPCXComponent},
        {path:'branch',component:BranchComponent},
        {path:'metropolis',component:MetropolisComponent}
    ])],
    exports:[RouterModule]
})
export class DeviceRoute{}