import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Params } from "@angular/router";

@Injectable({
	providedIn:'root'
})

export class HistoryService{

	constructor(private httpclien:HttpClient){

	}	

	getService(params:any){
		let id: number = params.id;
		return this.httpclien.get(`http://localhost:4200/api/history/${id}`);
	}
}