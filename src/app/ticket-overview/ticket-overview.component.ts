import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { TicketOverviewService } from './ticketoverwiew.service';
import * as fileSaver from 'file-saver';
@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.scss']
})
export class TicketOverviewComponent implements OnInit {
  params!:number;
  id:any = {};
  ticket:any = {};
  docName:any;
  url!:number;

  constructor(
    private route:ActivatedRoute, private ticketOwervie:TicketOverviewService,private router:Router,private myService:MyServiceService,
    private sanitizer:DomSanitizer,private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.myService.pageNameChange$;
    const subscription  = this.myService.pageNameChange$.subscribe(
      newPageName => {
        this.takeTIcket(newPageName)
        this.params = newPageName.id;
        subscription.unsubscribe();
      });
    
      const subscriptionUrl = this.myService.pageNameChange$.subscribe(
        newPageName => {  
          let url:string = window.location.href;
          this.url = url.search(/(.*history+.*)/);
          this.cdRef.detectChanges(); 
        });
  }

  takeTIcket(id:any){
    this.ticketOwervie.getTicket(id).subscribe(data =>{ 
        this.ticket = data;
    },(error) =>{
      this.router.navigate['/**']
    })
  }

  
  getAttachment(id:any,name:string){
   this.ticketOwervie.getAttacment(id,name).subscribe(data=>{
      let headers = data.headers.get('content-disposition');
      if(headers === null){
        return;
      }
      this.docName = headers!.split(';')[1].split('filename')[1].split('=')[1].trim();
      let localName = this.docName.replaceAll("\"","")
      fileSaver(data.body,localName);
    })
  }
  
  ifDraft(){
    let localName = localStorage.getItem("firstName");
    return this.ticket.state === "Draft" && this.ticket.owner === localName;
  }

  iFBoolean(){
    let name = localStorage.getItem("firstName");
    return this.url === 0 && this.ticket.owner === name && this.ticket.state === "Done";
  }
}
