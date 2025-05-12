import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectActivitiesComponent } from './select-activities.component';

describe('SelectActivitiesComponent', () => {
  let component: SelectActivitiesComponent;
  let fixture: ComponentFixture<SelectActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
