import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityScheduleComponent } from './activity-schedule.component';

describe('ActivityScheduleComponent', () => {
  let component: ActivityScheduleComponent;
  let fixture: ComponentFixture<ActivityScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
