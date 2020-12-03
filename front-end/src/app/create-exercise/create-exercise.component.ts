import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exercise } from './exercise';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  exerciseObj = new Exercise();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  createExcercise(){
    // Logic to create excersie.
    console.log(this.exerciseObj.exerciseName);
  }

  onImgChange(event){
    // On Uploading any image for exercise
    const uploadFile: any = document.querySelector('#file');
    this.exerciseObj.exerciseImg = uploadFile.files[0];
    console.log(this.exerciseObj.exerciseImg.name);
  }

}
