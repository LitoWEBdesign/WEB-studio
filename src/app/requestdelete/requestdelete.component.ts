import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import {Request} from '../commonfiles/request';
import {RequestformongoService} from '../commonfiles/requestformongodb/requestformongo.service';


@Component({
  selector: 'app-requestdelete',
  templateUrl: 'requestdelete.component.html',
  styleUrls: ['requestdelete.component.css']
})
export class RequestdeleteComponent implements OnInit {
  errorMessage:string;
  request:Request;
  constructor(private activatedRouter:ActivatedRoute, private router:Router,
              private mongoservice:RequestformongoService
              ) { }

  ngOnInit() {
    this.initId();
  }
  initId(){
    let id = this.activatedRouter.snapshot.params["id"];
    if (id) {
        this.mongoservice.getRequest(id)
            .subscribe(
            requests => this.request = requests,
            error => this.errorMessage = error
            );
    }
  }
  public deleteRequest() {  
    this.mongoservice.deleteRequest(this.request)
    .subscribe(
    () => this.goBack(),
    error => this.errorMessage = error
    );
  }
  goBack() {
    this.router.navigate(["/app-requestformforadmin"]);
}
}
