import { Component, Input, OnInit } from '@angular/core';
import { ExerciseCard } from './exercise-card';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent implements OnInit {

  @Input() exercise: ExerciseCard;
  
  constructor() { }

  ngOnInit(): void {
  }

}
