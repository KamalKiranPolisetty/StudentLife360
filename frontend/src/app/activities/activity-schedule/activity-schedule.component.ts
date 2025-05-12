import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivitiesService } from '../../_services/activities.service';

@Component({
  selector: 'app-activity-schedule',
  templateUrl: './activity-schedule.component.html',
  styleUrls: ['./activity-schedule.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ActivityScheduleComponent {

  scheduledActivities: any[] = [];
  scheduledForm: FormGroup;

  constructor(private fb: FormBuilder, private activityService: ActivitiesService) {
    this.scheduledForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
  }

  onSubmit() {
    const { startDate, endDate } = this.scheduledForm.value;
  
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(endDate);
  
    if (isNaN(startDateObject.getTime()) || isNaN(endDateObject.getTime())) {
      console.error('Invalid date format');
      return;
    }
  
    const formattedStartDate = this.formatDate(startDateObject);
    const formattedEndDate = this.formatDate(endDateObject);
  
    this.activityService.getScheduledActivities(formattedStartDate, formattedEndDate).subscribe(
      (data) => {
        this.scheduledActivities = data.activities;
      },
      (error) => {
        console.error('Error fetching scheduled activities:', error);
      }
    );
  }
  

  private formatDate(date: Date): string {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  }
  
}
