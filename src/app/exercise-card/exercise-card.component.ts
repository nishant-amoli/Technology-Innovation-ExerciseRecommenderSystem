import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExerciseEditDialogComponent } from 'app/exercise-edit-dialog/exercise-edit-dialog.component';
import { ExerciseCard } from './exercise-card';
import { ExerciseServiceService } from './exercise-service.service';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent implements OnInit {

  @Input() exercise: ExerciseCard;
  isHide = true;

  constructor(private exerciseService: ExerciseServiceService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showHide() {
    this.isHide = !this.isHide;
  }

  delete(id: number) {
    this.exerciseService.deleteExercise(id);
  }

  editExercise(exercise: ExerciseCard) {

    let editExercise = new ExerciseCard();
    editExercise.id = exercise.id;
    editExercise.name = '' + exercise.name;
    editExercise.content = '' + exercise.content;

    const dialogRef = this.dialog.open(ExerciseEditDialogComponent, {
      width: '300px',
      data: editExercise
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.id) {
        this.exerciseService.edit(result);
      }
    });
  }

}
