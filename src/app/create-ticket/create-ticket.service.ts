import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
	providedIn:'root'
})

export class CreateTicketService{
    
    constructor(private httpclient:HttpClient){}

    fileUploade(fn:any){
        return this.httpclient.post("http://localhost:4200/api/attachments",fn);
    }
    
    createTicket(form:FormGroup){
        return this.httpclient.post<any>("http://localhost:4200/api/ticket/create",{...form.value});
    }
}
