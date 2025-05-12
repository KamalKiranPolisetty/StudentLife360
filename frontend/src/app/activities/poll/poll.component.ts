import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivitiesService } from '../../_services/activities.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css'
})
export class PollComponent implements OnInit {
  voteForm: FormGroup;
  pollResults: any[] = [];

  constructor(
    private fb: FormBuilder,
    private voteService:ActivitiesService,
    private toastr:ToastrService
  ) {
    this.voteForm = this.fb.group({
      candidate: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getPollResults();
  }

  onSubmit() {
    if (this.voteForm.valid) {
      const { candidate } = this.voteForm.value;
      this.voteService.submitVote(candidate).subscribe(
        () => {
          console.log('Vote submitted successfully.');
          // Optionally, you can reset the form after submission
          this.voteForm.reset();
          // Update poll results after submitting a vote
          this.getPollResults();
        },
        (error:any) => {
          console.error('Error submitting vote:', error);
          this.toastr.error(error.error.message,"Error");
        }
      );
    }
  }

  getPollResults() {
    this.voteService.getPollResults().subscribe(
      (data:any) => {
        this.pollResults = data.pollResults;
      },
      (error:any) => {
        console.error('Error fetching poll results:', error);
      }
    );
  }

}
