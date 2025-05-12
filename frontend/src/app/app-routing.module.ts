import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './layout/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './authguard.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RoommateComponent } from './activities/roommate/roommate.component';
import { TextbookSearchComponent } from './activities/textbook-search/textbook-search.component';
import { PeopleSearchComponent } from './activities/people-search/people-search.component';
import { MealPlanComponent } from './activities/meal-plan/meal-plan.component';
import { BusTicketComponent } from './activities/bus-ticket/bus-ticket.component';
import { ActivityScheduleComponent } from './activities/activity-schedule/activity-schedule.component';
import { PollComponent } from './activities/poll/poll.component';
import { PaymentComponent } from './activities/payment/payment.component';
import { UserActivitiesComponent } from './activities/user-activities/user-activities.component';
import { SelectActivitiesComponent } from './activities/select-activities/select-activities.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'forgotpassword', component:ForgotPasswordComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path:'roommate', component:RoommateComponent, canActivate: [AuthGuard]},
  {path:'textbook',component:TextbookSearchComponent, canActivate: [AuthGuard]},
  {path:'people', component:PeopleSearchComponent, canActivate: [AuthGuard]},
  {path:'mealplan',component:MealPlanComponent, canActivate: [AuthGuard]},
  {path:'ticket',component:BusTicketComponent, canActivate: [AuthGuard]},
  {path:'activity',component:ActivityScheduleComponent, canActivate: [AuthGuard]},
  {path:'poll',component:PollComponent, canActivate: [AuthGuard]},
  {path:'payment',component:PaymentComponent, canActivate: [AuthGuard]},
  {path:'useractivity',component:UserActivitiesComponent, canActivate: [AuthGuard]},
  {path:'selectactivity',component:SelectActivitiesComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
