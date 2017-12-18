import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {Request} from '../commonfiles/request';
import {FormsModule,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Http} from '@angular/http';
import {RequestformongoService} from '../commonfiles/requestformongodb/requestformongo.service';



@Component({
    selector:'requestform',
    templateUrl:'requestform.component.html',
    styleUrls:['requestform.component.css']
})

export class RequestformComponent implements OnInit{
    services:string[]=['підключення інтернет','побудова канала звязку','підключення телефону','оренда місця в дата-центрі','підключення sip номера'];
    
    currentRequest: Request;
    errorMessage: string;
    requestForm: FormGroup;

    constructor(private service: RequestformongoService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.buildForm();
        this.getRequestFromRoute();
    }

    public checkError(element: string, errorType: string) {
        return this.requestForm.get(element).hasError(errorType) &&
            this.requestForm.get(element).touched
    }

    public onSubmit(requestForm: FormGroup) {
        this.currentRequest.name = requestForm.value.name;
        this.currentRequest.mail =requestForm.value.mail;
        this.currentRequest.company =requestForm.value.company;
        this.currentRequest.type =requestForm.value.type;
        this.currentRequest.text =requestForm.value.text;
        this.currentRequest.color=requestForm.value.color;
        if (this.currentRequest.id) {
            this.service.updateRequest(this.currentRequest)
                .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
                );
        } else {
            this.service.addRequest(this.currentRequest)
                .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
                );
        }
    }

    public goBack() {
        this.router.navigate(["/requestform"]);
    }

    private getRequestFromRoute() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["id"];

            if (id) {
                this.service.getRequest(id).subscribe(
                    request => {
                        this.currentRequest = request;
                        this.requestForm.patchValue(this.currentRequest);
                    },
                    error => this.errorMessage = error
                );
            }
            else {
                this.currentRequest = new Request(null, null, null,null,null,null,null);
                this.requestForm.patchValue(this.currentRequest);
            }
        });
    }

    private buildForm() {
        this.requestForm = this.fb.group({
            name: ["", Validators.required],
            mail: ["", Validators.required],
            company: ["", Validators.required],
            type: ["", Validators.required],
            text: ["", Validators.nullValidator],
        });
    }
    
    }
      

    
    

   
