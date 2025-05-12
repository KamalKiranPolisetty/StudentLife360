import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LandingComponent } from './layout/landing/landing.component';
import { RouterLink } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { httpInterceptorProviders } from './_helper/http.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MealPlanComponent } from './activities/meal-plan/meal-plan.component';
import { BusTicketComponent } from './activities/bus-ticket/bus-ticket.component';
import { PollComponent } from './activities/poll/poll.component';
import { PeopleSearchComponent } from './activities/people-search/people-search.component';
import { TextbookSearchComponent } from './activities/textbook-search/textbook-search.component';
import { RoommateComponent } from './activities/roommate/roommate.component';
import { ActivityScheduleComponent } from './activities/activity-schedule/activity-schedule.component';
import { PaymentComponent } from './activities/payment/payment.component';
import { SelectActivitiesComponent } from './activities/select-activities/select-activities.component';
import { UserActivitiesComponent } from './activities/user-activities/user-activities.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    MealPlanComponent,
    BusTicketComponent,
    PollComponent,
    PeopleSearchComponent,
    TextbookSearchComponent,
    RoommateComponent,
    ActivityScheduleComponent,
    PaymentComponent,
    SelectActivitiesComponent,
    UserActivitiesComponent,

  ],
  imports: [
    BrowserModule,AppRoutingModule,RouterLink,ReactiveFormsModule,NgChartsModule,
    AppRoutingModule,FormsModule,HttpClientModule,BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
