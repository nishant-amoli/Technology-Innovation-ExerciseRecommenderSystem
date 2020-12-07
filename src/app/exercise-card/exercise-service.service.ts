import { Injectable } from '@angular/core';
import { DashboardExercisesService } from 'app/user-dashboard/dashboard-exercises.service';
import { ExerciseCard } from './exercise-card';

@Injectable({
  providedIn: 'root'
})
export class ExerciseServiceService {
 
  exerciseList: Array<ExerciseCard> = [];
  maxId: number = 100;

  constructor(private dashboardExerciseService: DashboardExercisesService) {

    this.exerciseList = this.dashboardExerciseService.getAllExercise().map(x => Object.assign({}, x));
    this.exerciseList.forEach(exercise => {
      exercise.isAdmin = true;
    })
  }

  public deleteExercise(id: number) {
    this.exerciseList.forEach((exercise, currentIndex) => {
      if (exercise.id == id) {
        this.exerciseList.splice(currentIndex, 1);
      }
    });
  }

  public createExercise(newCard: ExerciseCard){
    let randomIndex = Math.floor(Math.random() * (this.exerciseList.length - 1));
    newCard.id = this.nextId();
    newCard.img = this.exerciseList[randomIndex].img;
    this.exerciseList.push(newCard);
  }

  public nextId(): number{
    this.maxId++;
    return this.maxId;
  }

  public edit(result: any) {
    this.exerciseList.forEach((exercise, currentIndex) =>{
      if (exercise.id == result.id) {
        // this.exerciseList[currentIndex] = result;
        this.exerciseList[currentIndex].name = result.name;
        this.exerciseList[currentIndex].content = result.content;
      }
    })
  }

}
