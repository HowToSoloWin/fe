import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { feedbackService } from './feedbackService';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  faStar = faStar;
  constructor(private route:ActivatedRoute, private router:Router, private feedbackService:feedbackService) { }

  params:any = {};
  feedback:any = {};
  feedbackRateOn:Array<number> = [];
  feedbackRateOff:Array<number> = [];

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) =>{
      this.params = params; 
    })

    this.feedbackService.geFeedback(this.params).subscribe(data=>{
      this.feedback = data;
      this.feedbackRateOn = Array(data.rate).fill(0).map((x,i)=>i);
      this.feedbackRateOff = Array(5-data.rate).fill(0).map((x,i) => i)
    },(error =>{
      this.router.navigate(['/404'])
    }))
  }


}
