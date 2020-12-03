import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoGymExercisesComponent } from './no-gym-exercises.component';

describe('NoGymExercisesComponent', () => {
  let component: NoGymExercisesComponent;
  let fixture: ComponentFixture<NoGymExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoGymExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoGymExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
