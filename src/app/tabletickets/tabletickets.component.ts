import { Component, OnInit, Output} from '@angular/core';
import { Input} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TicketService } from '../tickets/ticket.servece';

@Component({
  selector: 'app-tabletickets',
  templateUrl: './tabletickets.component.html',
  styleUrls: ['./tabletickets.component.scss']
})
export class TableticketsComponent implements OnInit {

  
  @Input() ticket : any = [];
  idTikets!:number ;

  constructor(private http: HttpClient, private ticketService:TicketService) { }

  ngOnInit(): void {

  }

   sortById(method:String):void{
     if(method === "Asc"){
      this.ticket.sort(
        (a,b)=> a.id - b.id);
     }else{
      this.ticket.sort(
        (a,b)=> b.id - a.id);
     }
   }

   sortByName(method:String):void{
     
    if(method === "Asc"){
      this.ticket.sort(
        (a,b)=>{
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
        });
     }else{
      this.ticket.sort(
        (a,b)=>{
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
          }
          return 0;
        });
     }
   }

   sortByData(method:String){
    if(method === "Asc"){
      this.ticket.sort(
        (a,b)=>{
            if (a.desiredResolutionDate > b.desiredResolutionDate) {
              return 1;
            }
            if (a.desiredResolutionDate < b.desiredResolutionDate) {
              return -1;
            }
            return 0;
        });
     }else{
      this.ticket.sort(
        (a,b)=>{
            if (a.desiredResolutionDate < b.desiredResolutionDate) {
              return 1;
            }
            if (a.desiredResolutionDate > b.desiredResolutionDate) {
              return -1;
          }
          return 0;
        });
     }
   }

   sortByUrgency(method:String):void{
      this.ticket.forEach(tic => {
        if(tic.urgency == 'Critical'){
          tic.urgency = 4;
        }
        if(tic.urgency == 'Hight'){
          tic.urgency = 3;
        }
        if(tic.urgency == 'Average'){
          tic.urgency = 2;
        }
        if(tic.urgency == 'Low'){
          tic.urgency = 1;
        }
      });
      
        if(method ==="Asc"){
          this.ticket.sort((a,b) => a.urgency - b.urgency );
        }else{
          this.ticket.sort((a,b) => b.urgency - a.urgency );
        }
     

      this.ticket.forEach(tic => {
        if(tic.urgency == 4){
          tic.urgency = 'Critical';
        }
        if(tic.urgency == 3){
          tic.urgency = 'Hight';
        }
        if(tic.urgency == 2){
          tic.urgency = 'Average';
        }
        if(tic.urgency == 1){
          tic.urgency = 'Low';
        }
      });
   }
 

   actionUpdate(action:string,id){
      let actionRemaster = action.toLowerCase();
       this.http.put<any>(`http://localhost:4200/api/ticket/${id}/${actionRemaster}`,{}).subscribe((data) =>{
       });
       setTimeout(()=>{
         this.refresh();
   }, 500);

   }
   refresh(){
     
     
    this.ticketService.getTicket().subscribe((data) =>{
      this.ticket = data;
     
   })

}
}
