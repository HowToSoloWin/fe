import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-leave-feedback',
  templateUrl: './leave-feedback.component.html',
  styleUrls: ['./leave-feedback.component.scss']
})
export class LeaveFeedbackComponent implements OnInit {

  params:any;
  rate!:number;
  constructor(private route:ActivatedRoute, private http:HttpClient, private router:Router) { }

  testINT = Array(3).fill(0).map((x,i)=>i);
  test2INT = Array(5-3).fill(0).map((x,i) => i)
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.params = params; 
    })
  }
  sizeStar(size:any){
    this.rate = size;
  }

  addFeedback(text:string){
    this.http.post(`http://localhost:4200/api/feedback`,{
      rate:this.rate,
      text:text,
      ticketId:this.params.id
    }).subscribe((data) =>{
        this.router.navigate(['/overview/history/',this.params.id])
    })
  }
}
