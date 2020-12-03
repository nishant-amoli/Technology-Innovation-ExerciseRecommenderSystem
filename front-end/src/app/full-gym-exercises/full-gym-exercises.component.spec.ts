import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullGymExercisesComponent } from './full-gym-exercises.component';

describe('FullGymExercisesComponent', () => {
  let component: FullGymExercisesComponent;
  let fixture: ComponentFixture<FullGymExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullGymExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullGymExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
