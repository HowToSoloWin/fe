import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { TicketOverviewService } from '../ticket-overview/ticketoverwiew.service';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Output() childEventEmitter = new EventEmitter<number>();

  params:any;
  history!:any;
  constructor(private route:ActivatedRoute, private historyService:HistoryService, private ticketOwrvie:TicketOverviewService,private myService:MyServiceService, private routeR:Router,private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.params = params;
      this.myService.changedComponentName(params);
     
    })
    // this.cdRef.detectChanges(); 
   this.getHistory();
  }

  getHistory(){
    
    this.historyService.getService(this.params).subscribe((data=>{
      this.history = data;
    }),(error) =>{
      console.log("ERRO");
      
      this.routeR.navigate['/']
    })

  }
}
