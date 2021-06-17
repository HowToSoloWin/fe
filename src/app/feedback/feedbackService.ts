import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn:'root'
})

export class feedbackService{

    constructor(private httpclient:HttpClient){}

    geFeedback(params:any){
        return this.httpclient.get<any>(`http://localhost:4200/api/feedback/${params.id}`)
    }
}