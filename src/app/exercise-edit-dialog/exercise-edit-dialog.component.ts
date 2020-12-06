import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExerciseCard } from 'app/exercise-card/exercise-card';

@Component({
  selector: 'app-exercise-edit-dialog',
  templateUrl: './exercise-edit-dialog.component.html',
  styleUrls: ['./exercise-edit-dialog.component.css']
})
export class ExerciseEditDialogComponent implements OnInit {

  oldData: ExerciseCard;

  constructor(public dialogRef: MatDialogRef<ExerciseEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExerciseCard) {
    this.oldData = data;
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
