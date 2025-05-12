import { Component } from '@angular/core';
import { ActivitiesService } from '../../_services/activities.service';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrl: './user-activities.component.css'
})
export class UserActivitiesComponent {
  userSelectedActivities: any[] = [];

  constructor(private activityService: ActivitiesService) {
    this.getUserSelectedActivities();
  }

  getUserSelectedActivities() {
    this.activityService.getAllActivities().subscribe(
      (data) => {
        this.userSelectedActivities = data.activities;
        console.log(data.activities);
      },
      (error) => {
        console.error('Error fetching user selected activities:', error);
      }
    );
  }

}
