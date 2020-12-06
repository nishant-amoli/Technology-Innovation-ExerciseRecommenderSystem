import { Component, OnInit } from '@angular/core';
import { DashboardExercisesService } from 'app/user-dashboard/dashboard-exercises.service';
import { ExerciseCard } from '../exercise-card/exercise-card';
@Component({
  selector: 'app-full-gym-exercises',
  templateUrl: './full-gym-exercises.component.html',
  styleUrls: ['./full-gym-exercises.component.css']
})
export class FullGymExercisesComponent implements OnInit {
  exercises: Array<ExerciseCard> = [];

  constructor(private dashboardExercisesService: DashboardExercisesService) { }

  ngOnInit(): void {
    this.exercises = this.dashboardExercisesService.getAllExercise();
    this.exercises = this.filterOnlyGymExercise();
  }

  filterOnlyGymExercise(): ExerciseCard[] {
    return this.exercises.filter(exe => {
      if(exe.isGymRequired){
        return exe;
      }
    });
  }

}
