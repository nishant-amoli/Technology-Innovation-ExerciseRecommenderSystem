import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question/question';
import { QuestionService } from './question/question.service';

@Component({
  selector: 'app-survery',
  templateUrl: './survery.component.html',
  styleUrls: ['./survery.component.css'],
  providers: [QuestionService]
})
export class SurveryComponent implements OnInit {

  questions$: Observable<Question<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

}
