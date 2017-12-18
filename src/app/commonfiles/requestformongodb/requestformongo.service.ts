import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from "@angular/http";
import { Request } from "../request";
import { Observable } from "rxjs/Observable";


@Injectable()
export class RequestformongoService {
 // адрес сервиса
 private url = "http://localhost:2403/requestform";
 
     constructor(private http: Http) { }
 
     // Отправка GET запроса нв сервер
     public getRequsets(): Observable<Request[]> {
         let requests = this.http.get(this.url)
             .map(this.extractRequests) // преобразовывает ответ в массив экземпляров Request.
            return requests;
     }
 
     public getRequest(id: string): Observable<Request> {
         let request = this.http.get(this.url + "/" + id)
             .map(this.extractRequest); // преобразовывает ответ в экземпляр Request.
             
         return request;
     }
 
     // Отправка POST запроса на сервер, добавление нового запроса в базу.
     public addRequest(request: Request) {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
         return this.http.post(this.url, request,options)
            
     }
 
     // Отправка PUT запроса и обновление запроса в базе.
     public updateRequest(request: Request) {
         return this.http.put(this.url + "/" + request.id, request);
            
     }
     public changeColor(request:Request){
         return this.http.put(this.url+"/"+request.color,request);
     }
     public getColor(request:Request){
         return this.http.get(this.url+"/"+ request.color)
     }
     // Отправка DELETE запроса и удаление запроса из базы.
     public deleteRequest(request: Request) {
         
         return this.http.delete(this.url + "/" + request.id)
             
     }
 
     private extractRequests(response: Response){
         let res = response.json();
         let request: Request[] = [];
         for (let i = 0; i < res.length; i++) {
             request.push(new Request(res[i].id, res[i].name, res[i].mail,res[i].company,res[i].type,res[i].text,res[i].color));
         }
         return request;
     }
 
     private extractRequest(response: Response) {
         let res = response.json();
         let request = new Request(res.id, res.name, res.mail,res.company,res.type,res.text,res.color);
         return request;
     }
 
     private handleError(error: any, cought: Observable<any>): any {
         let message = "";
 
         if (error instanceof Response) {
             let errorData = error.json().error || JSON.stringify(error.json());
             message = `${error.status} - ${error.statusText || ''} ${errorData}`
         } else {
             message = error.message ? error.message : error.toString();
         }
 
         console.error(message);
 
         return Observable.throw(message);
     }
    
}
