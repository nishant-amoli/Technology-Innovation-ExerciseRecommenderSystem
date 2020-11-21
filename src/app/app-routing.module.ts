import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SurveryComponent } from './survery/survery.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'dashboard', component: UserDashboardComponent},
  { path: 'user/survey', component: SurveryComponent},
  { path: 'admin/create-excerise', component: CreateExerciseComponent},
  { path: 'exercise-card', component: ExerciseCardComponent},
  { path: 'admin', component: AdminPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
