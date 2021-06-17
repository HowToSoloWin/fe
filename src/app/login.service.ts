import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login!:String;
  password!:String;
  header!:HttpHeaders;

  constructor() { }

  getHeader(){
    this.header = new HttpHeaders({
      Authorization:'Basic '+btoa(this.login+":"+this.password)
    })  
    return this.header;
  }


  setLogin(login:String){
    this.login = login;
  }

  setPassword(password:String){
    this.password = password;
  }

  getLogin(){
    return this.login;
  }

  getPassword(){
    return this.password;
  }

}
