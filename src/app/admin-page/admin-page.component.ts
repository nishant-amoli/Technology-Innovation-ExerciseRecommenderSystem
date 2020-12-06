import { Component, OnInit } from '@angular/core';
import { ExerciseCard } from '../exercise-card/exercise-card';
import { ActivatedRoute } from '@angular/router';
import { ExerciseServiceService } from 'app/exercise-card/exercise-service.service';
import { AdminAdvertise } from 'app/admin-advertisement/admin-advertisement';
import { AdminAdvertisementService } from 'app/admin-advertisement/admin-advertisement.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  active;
  exercises: Array<ExerciseCard> = [];
  ads: Array<AdminAdvertise> = [];

  constructor(private route: ActivatedRoute,
    private exerciseService: ExerciseServiceService,
    private adService: AdminAdvertisementService) { }

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
    this.ads = this.adService.adList;
    console.log(this.exercises);
  }

  getExerciseList(): Array<ExerciseCard> {

    return this.exerciseService.exerciseList;
  }

}
