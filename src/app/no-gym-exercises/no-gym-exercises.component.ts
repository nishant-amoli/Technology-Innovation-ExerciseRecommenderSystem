import { Component, OnInit } from '@angular/core';
import { DashboardExercisesService } from 'app/user-dashboard/dashboard-exercises.service';
import { ExerciseCard } from '../exercise-card/exercise-card';
@Component({
  selector: 'app-no-gym-exercises',
  templateUrl: './no-gym-exercises.component.html',
  styleUrls: ['./no-gym-exercises.component.css']
})
export class NoGymExercisesComponent implements OnInit {
  exercises: Array<ExerciseCard> = [];

  constructor(private dashboardExercisesService: DashboardExercisesService) { }

  ngOnInit(): void {
    this.exercises = this.dashboardExercisesService.getAllExercise();
    this.exercises = this.filterNoGymExercise();
    console.log(this.exercises);
  }

  filterNoGymExercise(): ExerciseCard[] {
    return this.exercises.filter(exe => {
      if(!exe.isGymRequired){
        return exe;
      }
    });
  }
}
