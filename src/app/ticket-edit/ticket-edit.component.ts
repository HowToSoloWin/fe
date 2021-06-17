import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {
  getObject :any = {};
  i:number = 0;
  params;
  deletaAtachment:any = [];

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

  form!:FormGroup;
  todayDate:Date = new Date();
  constructor(private http: HttpClient, private router:Router,private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.params = params;
    })
    this.initForm();
    this.serverGet();
  }


  private initForm():void{
    this.form = new FormGroup({
        id:new FormControl(''),
        name:new FormControl('',[Validators.required,Validators.maxLength(100)]),
        category:new FormControl(''),
        description:new FormControl(''),
        urgency:new FormControl(''),
        desiredResolutionDate:new FormControl(),
        comment:new FormControl('',[Validators.maxLength(500)]),
        username:new FormControl(localStorage.getItem('name')!),
        state:new FormControl('New')
      });
  }


  serverGet(){
      this.http.get<any>(`http://localhost:4200/api/ticket/${this.params.id}`)
      .subscribe((data =>{
        this.getObject = data;

        this.category.forEach((element , i) => {
          
          if(element === this.getObject.categoryId){
            this.category.splice(i,1)
          }
        }); 
        this.form.patchValue({
          id:this.params.id,
          name:data.name,
          description:data.description,
          category:data.category,
          urgency:data.urgency,
          desiredResolutionDate:new Date(data.desiredResolutionDate)
        })
          
        this.urgency.forEach((element , i) =>{
          if(element === this.getObject.urgency){
            this.urgency.splice(i,1)
          }
        });
      }))
  }


  onclicPut(state:string){
    if(this.form.valid){
      let username:any = localStorage.getItem('name')!;
      this.form.value.username = username;
      this.form.value.state = state;
      this.http.put<any>("http://localhost:4200/api/ticket/edit",{...this.form.value}).
      subscribe((data =>{
       this.router.navigate(["/tickets"])
      }))
      console.log(this.deletaAtachment);
      
      this.deletaAtachment.forEach(item => {
        this.http.delete<any>(`http://localhost:4200/api/attachments/${item.name}/${item.ticketID}`).
        subscribe((data =>{
          console.log(data);
        }))
      });
     
    }
}

  testRemov(name:string){
    let a = this.getObject.attacmentDto.findIndex(x => x.name === name);
    this.deletaAtachment.push(this.getObject.attacmentDto[a]);
    this.getObject.attacmentDto.splice(a,1);
  }
}
