import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../_services/activities.service';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css']
})
export class MealPlanComponent implements OnInit {
  mealPlans: any[] = [];
  duration: string = '';

  constructor(private mealPlanService: ActivitiesService) { }

  ngOnInit(): void {
    this.getPurchasedMealPlans();
  }

  purchaseMealPlan(): void {
    this.mealPlanService.purchaseMealPlan(this.duration)
      .subscribe((response) => {
        console.log(response); 
        this.getPurchasedMealPlans();
      }, (error) => {
        console.error(error);
      });
  }

  getPurchasedMealPlans(): void {
    this.mealPlanService.getPurchasedMealPlans()
      .subscribe((response) => {
        this.mealPlans = response.mealPlans;
        console.log(this.mealPlans); // Ensure that data is fetched correctly
      }, (error) => {
        console.error(error); // Handle error
      });
  }
}
