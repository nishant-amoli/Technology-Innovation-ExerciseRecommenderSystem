
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseCard } from '../exercise-card/exercise-card';
import { DashboardExercisesService } from './dashboard-exercises.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  active;
  monExercises: Array<ExerciseCard> = [];
  tueExercises: Array<ExerciseCard> = [];
  wedExercises: Array<ExerciseCard> = [];
  thuExercises: Array<ExerciseCard> = [];
  friExercises: Array<ExerciseCard> = [];
  satExercises: Array<ExerciseCard> = [];
  sunExercises: Array<ExerciseCard> = [];
  allExercises: Array<ExerciseCard> = [];

  constructor(private route: ActivatedRoute,
    private dashboardExercisesService: DashboardExercisesService) { }

  ngOnInit(): void {
        // this.exercises = this.getExerciseList();
    // console.log(this.exercises);

    this.route.queryParams.forEach( params =>{
      if(params.active){
        this.active = +params.active;
        console.log(this.active);
      }
    });
    if(!this.active){
      this.active = 1;
    }
    this.initExercise();
  }
  initExercise() {
    console.log("Init:" + this.active);
    
    this.monExercises = this.dashboardExercisesService.getMonExercise();
    this.tueExercises = this.dashboardExercisesService.getTueExercise();
    // this.wedExercises = this.getWedExercise();
    this.thuExercises = this.dashboardExercisesService.getThuExercise();
    this.friExercises = this.dashboardExercisesService.getFriExercise();
    this.satExercises = this.dashboardExercisesService.getSatExercise();
    // this.sunExercises = this.getSunExercise();
    this.allExercises = this.dashboardExercisesService.getAllExercise();
  }
}
