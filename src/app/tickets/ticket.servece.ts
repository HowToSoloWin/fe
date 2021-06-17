import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn:'root'
})

export class TicketService{
	constructor(private httpclien:HttpClient){

	}

	getTicket(){
		return this.httpclien.get('http://localhost:4200/api/ticket');
	}
	
	logout(){
		return this.httpclien.get<any>('http://localhost:4200/api/logout');
	}
	
	authentication(){
		return	this.httpclien.get<any>('http://localhost:4200/api/login/success');
	   }

	//    test(){
	// 	const headers = new HttpHeaders({
	// 		'Content-Type': 'application/json',
	// 		'Accept': 'application/json'
	// 	})
	// 	return	this.httpclien.get<Blob>('http://localhost:4200/api/attachments/7',{headers:headers,responseType:'blob' as 'json'});
	//    }
}