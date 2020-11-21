import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { SurveryComponent } from './survery/survery.component';
import { SurveyFormComponent } from "./survery/survey-form.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionFormComponent } from './survery/question/question-form.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    HomePageComponent,
    AppHeaderComponent,
    SurveryComponent,
    SurveyFormComponent,
    QuestionFormComponent,
    CreateExerciseComponent,
    ExerciseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
