import { Component, OnInit } from '@angular/core';
import { ExerciseCard } from '../exercise-card/exercise-card';
import { ActivatedRoute } from '@angular/router';
import { ExerciseServiceService } from 'app/exercise-card/exercise-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  active;
  exercises: Array<ExerciseCard> = [];
  constructor(private route: ActivatedRoute,
    private exerciseService: ExerciseServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.forEach( params =>{
      if(params.active){
        this.active = +params.active;
        console.log(this.active);
      }
    });
    if(!this.active){
      this.active = 1;
    }

    this.exercises = this.getExerciseList();
    console.log(this.exercises);
  }

  getExerciseList(): Array<ExerciseCard> {

    return this.exerciseService.exerciseList;
  }

}
