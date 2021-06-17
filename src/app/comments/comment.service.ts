import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn:'root'
})

export class CommentService{
    constructor(private httpclient:HttpClient){}

    addComment(form){
        return this.httpclient.post<any>('http://localhost:4200/api/comment',{...form.value})
    }
    
    getComment(ticketId:any){
        return this.httpclient.get<any>(`http://localhost:4200/api/comment/${ticketId}`)
    }

    getMoteComment(id:any){
        return this.httpclient.get<any>(`http://localhost:4200/api/comment/test/${id}`)
    }
}