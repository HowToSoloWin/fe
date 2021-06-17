import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TicketsComponent } from './tickets/tickets.component';
import { MyticketsComponent } from './mytickets/mytickets.component';
import { TableticketsComponent } from './tabletickets/tabletickets.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { HttpClientModule }   from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketOverviewComponent } from './ticket-overview/ticket-overview.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HistoryComponent } from './history/history.component';
import { CommentsComponent } from './comments/comments.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMomentDateModule} from "@angular/material-moment-adapter";
import { LeaveFeedbackComponent } from './leave-feedback/leave-feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TicketsComponent,
    MyticketsComponent,
    TableticketsComponent,
    CreateTicketComponent,
    TicketOverviewComponent,
    HistoryComponent,
    CommentsComponent,
    TicketEditComponent,
    FeedbackComponent,
    LeaveFeedbackComponent,
    NotFoundComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    NgbModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    FontAwesomeModule 
    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
