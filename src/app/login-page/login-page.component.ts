import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { loginservice } from './login.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  errorMassage:String = "";
  login:String = "";
  password : String = "";
  

  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
]);


passwordControl = new FormControl('',[
  Validators.required,
  Validators.pattern(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/),
  Validators.maxLength(20),
  
]);

matcher = new MyErrorStateMatcher();
matcher2 = new MyErrorStateMatcher();

  constructor(private router:Router, private loginservice:loginservice) {
     
    }

  ngOnInit(): void {
    this.loginservice.authentication().subscribe(data =>{
		  if(data.login){

        this.router.navigate(["/tickets"])
      
		  }else{
			 
		  }
		},
		error=>{
      return;
		})
  }

  
   
  authorize(){
    // if(this.emailFormControl.valid && this.passwordControl.valid){
    // }
    // this.errorMassage = "Невидилная форма"

    this.loginservice.autorization(this.emailFormControl.value,this.passwordControl.value).subscribe(data=>{
      localStorage.setItem("name",data.username)
      localStorage.setItem("firstName",data.firstName)
      localStorage.setItem("role",data.role)
       this.router.navigate(["/tickets"])
     },
     error=>{
       console.log(error.status);
       
       error = error.message; 
       this.errorMassage = "Неверный логин или пароль";
     })
    
  }
}
