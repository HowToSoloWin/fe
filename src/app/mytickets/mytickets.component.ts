import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.scss']
})
export class MyticketsComponent implements OnInit {

  tickets:any = [];
  userName:String = "lol";
  
  constructor(private http:HttpClient) { 
    // this.getMyticket();
  }

  ngOnInit(): void {
   
  }
  // getMyticket(){
  //   this.http.get<any>('http://localhost:4200/api/ticket/myticket').subscribe(data=>{
  //     this.tickets = data;
      
  //   })
  // }

}
