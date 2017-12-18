import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import {Request} from '../commonfiles/request';
import {RequestformongoService} from '../commonfiles/requestformongodb/requestformongo.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-requestformforadmin',
  templateUrl: 'requestformforadmin.component.html',
  styleUrls: ['requestformforadmin.component.css']
})
export class RequestformforadminComponent implements OnInit {
    request:Request[];
    errorMessage:string;
    btnchange:boolean=false;
    defaultcolor:boolean=true;
    currentrequest:Request;
    colorchange:FormGroup;
    
  constructor(private mongoservice:RequestformongoService, 
              private router:Router,
              private fb:FormBuilder,      
              private activatedRouter:ActivatedRoute ) { }
      goBack() {
                this.router.navigate(["/app-requestformforadmin"]);
            }

  ngOnInit() {
    this.getAllRequest();
    
  }

  private getAllRequest() {
    this.mongoservice.getRequsets().subscribe(
        request => this.request = request,
        error => this.errorMessage = error
    )
  }
  public deleteRequest(request:Request) {
    this.router.navigate(['/app-requestdelete',request.id]);
}
  }

