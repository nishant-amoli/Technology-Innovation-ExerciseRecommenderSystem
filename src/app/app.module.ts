import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { SurveryComponent } from './survery/survery.component';
import { SurveyFormComponent } from "./survery/survey-form.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatInputModule} from '@angular/material/input';
import { QuestionFormComponent } from './survery/question/question-form.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginService } from './login/LoginService';
import { FullGymExercisesComponent } from './full-gym-exercises/full-gym-exercises.component';
import { NoGymExercisesComponent } from './no-gym-exercises/no-gym-exercises.component';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    HomePageComponent,
    AppHeaderComponent,
    AdvertisementComponent,
    SurveryComponent,
    SurveyFormComponent,
    QuestionFormComponent,
    CreateExerciseComponent,
    ExerciseCardComponent,
    AdminPageComponent,
    FullGymExercisesComponent,
    NoGymExercisesComponent,
    CreateAdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
