import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {AuthserviceService } from '../../commonfiles/authservice.service';

@Component({
    selector:'login',
    templateUrl:'loginform.component.html',
    styleUrls:['loginform.component.css']
})
export class LoginformComponent{

    password: string;
    userLogin:string;
    message: string;

    constructor(public authService: AuthserviceService, public router: Router) {
        this.setMessage();
    }
    setMessage() {
        this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
    }

    login() {
        this.message = "Trying to log in ...";
        this.authService.login(this.userLogin, this.password).subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Получение строки для перенаправления от сервиса
                // если строки нет перенаправляем на страницу по умолчнанию
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : "/requestform";
                // перенапраление пользователя
                this.router.navigate([redirect]);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}