import { Component } from '@angular/core';
import { ActivitiesService } from '../../_services/activities.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-activities',
  templateUrl: './select-activities.component.html',
  styleUrl: './select-activities.component.css'
})
export class SelectActivitiesComponent {
 
  activities: any[] = []; 
  userSelectionForm: FormGroup;

  constructor(private fb: FormBuilder, private activityService: ActivitiesService,private router:Router) {
    this.userSelectionForm = this.fb.group({
      selectedActivities: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.activityService.getAllActivities().subscribe(
      (data) => {
        this.activities = data.activities; 
        console.log(data);
        this.activities.forEach(() => this.addActivityCheckbox());
      },
      (error) => {
        console.error('Error fetching available activities:', error);
      }
    );
  }

  addActivityCheckbox() {
    const selectedActivitiesArray = this.userSelectionForm.get('selectedActivities') as FormArray;
    selectedActivitiesArray.push(new FormControl(false));
  }

  onSubmit() {
    const selectedActivities = this.userSelectionForm.value.selectedActivities;
    
    const selectedActivityIds = this.activities
      .map((activity, index) => selectedActivities[index] ? activity.id : null)
      .filter(activityId => activityId !== null);
  
    this.activityService.selectActivities(selectedActivityIds).subscribe(
      () => {
        console.log('Activities selected successfully.');
        this.router.navigate(['useractivity']);
      },
      (error) => {
        console.error('Error selecting activities:', error);
      }
    );
  }
  


}
