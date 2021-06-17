import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {

  @Output() childEvent = new EventEmitter<any>();
  
  comments:any = [];
  params:any = {};

  form:FormGroup = new FormGroup({
    comment:new FormControl('',[Validators.required]),
    name:new FormControl(''),
    ticketId:new FormControl('')
  })

  constructor(private route:ActivatedRoute, private commentsService:CommentService,private myService:MyServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.params = params;
      this.myService.changedComponentName(params);
    })
    this.getComment();
    
  }

  addComment(comment:string){
    let name:any = localStorage.getItem('name');

    this.form.patchValue({
      name:name,
      ticketId:this.params.id
    })

    this.commentsService.addComment(this.form).subscribe(data => {
       this.comments = data;  
    })
    this.form.reset();
  }

  getComment(){
      this.commentsService.getComment(this.params.id).
      subscribe(data => {
        this.comments = data;
      })
  }

  getMoreComment(){
    this.commentsService.getMoteComment(this.params.id).subscribe(data =>{
      this.comments = this.comments.concat(data);
      // this.comments = data;
    })
  }
}
