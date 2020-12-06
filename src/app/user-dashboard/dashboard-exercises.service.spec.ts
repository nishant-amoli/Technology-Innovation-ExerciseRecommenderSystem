import { TestBed } from '@angular/core/testing';

import { DashboardExercisesService } from './dashboard-exercises.service';

describe('DashboardExercisesService', () => {
  let service: DashboardExercisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardExercisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
