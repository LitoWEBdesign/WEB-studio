import { Injectable } from '@angular/core';
import { Http,HttpModule,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Request} from '../request';
 

@Injectable()
export class RequestsendformService {

  private emailUrl = 'http://localhost:4200/requestform';
  
   constructor(private http: Http) {
  
   }
  
   onSubmit(message: Request): Observable<Request> | any {
     return this.http.post(this.emailUrl, message)
       .map(response => {
         console.log('Sending email was successfull', response);
         return response;
       })
       .catch(error => {
         console.log('Sending email got error', error);
         return Observable.throw(error)
       })
   }
  

}
// Для отправки по почте. Необходимо доработать.