import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExerciseCard } from 'app/exercise-card/exercise-card';
import { ExerciseServiceService } from 'app/exercise-card/exercise-service.service';
import { Exercise } from './exercise';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  exerciseObj = new Exercise();

  constructor(private formBuilder: FormBuilder,
    private exerciseService: ExerciseServiceService,
    private router:Router) { }

  ngOnInit(): void {

  }

  createExcercise(){
    // Logic to create excersie.
    let newExercise = new ExerciseCard();
    newExercise.name = this.exerciseObj.exerciseName;
    newExercise.isAdmin = true;
    newExercise.content = this.exerciseObj.exerciseDesc;
    newExercise.img = "data:image/jpeg;base64,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";
    this.exerciseService.createExercise(newExercise);
    this.router.navigate(['/admin'], { queryParams: { active: 1}});
  }

  onImgChange(event){
    // On Uploading any image for exercise
    const uploadFile: any = document.querySelector('#file');
    this.exerciseObj.exerciseImg = uploadFile.files[0];
    console.log(this.exerciseObj.exerciseImg.name);
  }

}
