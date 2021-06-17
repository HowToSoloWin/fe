import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HistoryComponent } from './history/history.component';
import { LeaveFeedbackComponent } from './leave-feedback/leave-feedback.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyticketsComponent } from './mytickets/mytickets.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketOverviewComponent } from './ticket-overview/ticket-overview.component';
import { TicketsComponent } from './tickets/tickets.component';
const routes: Routes = [
{
    path:"",component:LoginPageComponent
},
{
  path:"tickets",component:TicketsComponent
},
{
  path:"mytickets",component:MyticketsComponent
},
{
  path:"createticket",component:CreateTicketComponent
},
{
  path:"overview",component:TicketOverviewComponent,
  children:[
    {
      path:"comment/:id",component:CommentsComponent
    },
    {
      path:"history/:id",component:HistoryComponent
    }
  ]
},
{
  path:"editticket/:id", component:TicketEditComponent
},
{
  path:"feedback/:id",component:FeedbackComponent
},
{
  path:"leaveFeedback/:id",component:LeaveFeedbackComponent
},
{
  path:"**",redirectTo:'/404'
},
{
  path:'404',component:NotFoundComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
