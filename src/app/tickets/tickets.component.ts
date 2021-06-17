
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from './ticket.servece';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})

export class TicketsComponent implements OnInit {
  
  tickets!:any;
  lolkek:String = "dsada";
  data:any;

  constructor(private router:Router,private ticketService:TicketService, private http:HttpClient) { }

  

  ngOnInit(): void {
     this.authentication();
      this.getTicket();
  }


    isEmpty(obj:any) {
      for (let key in obj) {
        return false;
    }
      return true;
  }

  getTicket(){
    this.ticketService.getTicket().subscribe((data) =>{
      this.tickets = data;
      this.tickets.forEach(element => {
      });
    },
    error=>{
  
    })
  }

  logout(){
    this.ticketService.logout().subscribe((data) =>{})
    setTimeout(() => {
      this.router.navigate(["/"]);
    }, 200);
    
   }
   authentication(){
    this.ticketService.authentication().subscribe(data =>{
		},
		error=>{
      this.router.navigate(["/"])
		})
   }
   thisRole(){
     return localStorage.getItem("role") === "Engineer"
   }

}
