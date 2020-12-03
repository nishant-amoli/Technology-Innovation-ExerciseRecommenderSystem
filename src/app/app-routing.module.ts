import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SurveryComponent } from './survery/survery.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'dashboard', component: UserDashboardComponent},
  { path: 'survey', loadChildren: './dashboard#survey'},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user/survey', component: SurveryComponent},
  { path: 'admin/create-excerise', component: CreateExerciseComponent},
  { path: 'admin/create-advertisement', component: CreateAdvertisementComponent},
  { path: 'exercise-card', component: ExerciseCardComponent},
  { path: 'admin', component: AdminPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
