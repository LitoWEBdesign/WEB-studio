import {NgModule} from '@angular/core';
import { AuthserviceService } from './commonfiles/authservice.service';
import {AuthguardService} from './commonfiles/auth-guard.service';
import {RouterModule} from '@angular/router';
import {LoginformComponent} from './aboutphone/loginform/loginform.component';

@NgModule({
    imports:[RouterModule.forChild([
        { path: "login", component: LoginformComponent }
    ])],
    exports:[RouterModule],
    providers:[AuthserviceService,AuthguardService ],
    declarations:[]

})
export class LoginRoutingModule{}