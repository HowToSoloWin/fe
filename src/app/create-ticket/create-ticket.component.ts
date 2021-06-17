import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CreateTicketService } from './create-ticket.service';


@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})

export class CreateTicketComponent implements OnInit {

  validAttach:boolean = true;
  todayDate:Date = new Date();
  fileToUpload:any = []; 
  fileToUploadName:any = []; 

  category:any = [
    "Application & Services",
    "Benefits & Paper Work",
    "Hardware & Software",
    "People Management",
    "Security & Access",
    "Workplaces & Facilities"
 ]

 urgency:any = [
    "Critical",
   "Hight",
    "Average",
   "Low"
 ]

  form:FormGroup = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      category:new FormControl(this.category[0]),
      description:new FormControl(''),
      urgency:new FormControl(this.urgency[0]),
      desiredResolutionDate:new FormControl('',[Validators.required]),
      comment:new FormControl('',[Validators.maxLength(500)]),
      username:new FormControl(localStorage.getItem('name')!),
      state:new FormControl('')
});
    
  constructor(private router:Router,private createService :CreateTicketService) { }

  ngOnInit(): void {}

  onclicPost(State:string){
    this.form.value.state = State; 
    
    if(this.form.valid && this.validAttach){
        let username:any = localStorage.getItem('name')!;
        this.form.value.username = username;
        this.createService.createTicket(this.form).subscribe((data =>{
        try{
            this.fileUpload(data);
         }catch(err){}
         this.router.navigate(["/tickets"])  
      }))
    }
}

  onFileSelect(event:any){
    for(let i = 0; i < event.target.files.length; i++){
      this.fileToUpload.push(event.target.files[i]);
      this.fileToUploadName.push(event.target.files[i].name);
      let validName = event.target.files[i].name.split(".").pop();
      if(validName === "pdf" || validName === "doc" || validName === "docx" || validName === "png" || validName === "jpeg" || validName === "jpg"){
          this.validAttach = true;
      }else{
          this.validAttach = false;
          return;
      }
    }
}

  fileUpload(data){
        const fn = new FormData();

        for(let i = 0; i < this.fileToUpload.length; i++){
          fn.append('file',this.fileToUpload[i],this.fileToUploadName[i]);
        }
        fn.append('id',`${data}`)
        
      this.createService.fileUploade(fn).subscribe(data =>{
      })
  }
}
