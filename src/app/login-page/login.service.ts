import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn:'root'
})

export class loginservice{

	constructor(private httpclient:HttpClient){

	}

	autorization(login:String,password:String){
		return this.httpclient.post<any>('http://localhost:4200/api/login',
		{
			name:login,
			password:password
		})
	}

	authentication(){
	 return	this.httpclient.get<any>('http://localhost:4200/api/login/success');
	}
}