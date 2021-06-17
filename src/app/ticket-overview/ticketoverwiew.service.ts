import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn:'root'
})

export class TicketOverviewService{
	constructor(private httpclient:HttpClient){}

	prams:any;

	getTicket(id:any){
		return	this.httpclient.get<any>(`http://localhost:4200/api/ticket/${id.id}`);
	   }


	   getAttacment(id:number,name:string){
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		})
		return	this.httpclient.get<Blob>(`http://localhost:4200/api/attachments/${name}/${id}`,{headers:headers,responseType:'blob' as 'json',observe: 'response'});
	   }
}