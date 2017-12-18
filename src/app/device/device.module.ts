import {NgModule} from '@angular/core';
import {OmniPCXComponent} from './decision/omnipcx/omnipcx.component';
import {RouterModule} from '@angular/router';
import {DeviceRoute} from './device.route';
import {DecisionComponent} from './decision/decision.component';
import {BranchComponent} from './decision/branch/branch.component';
import {MetropolisComponent} from './decision/metropolis/metropolis.component';


@NgModule({
    imports:[RouterModule,DeviceRoute],
    declarations:[OmniPCXComponent,DecisionComponent,BranchComponent,MetropolisComponent]
})

export class DeviceModule{}