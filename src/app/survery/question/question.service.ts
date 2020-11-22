import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Question } from './question';
import { CheckboxQuestion } from './question-checkbox';
import { RadioQuestion } from './question-radio';
import { SelectQuestion } from './question-select';
import { TextQuestion } from './question-text';

@Injectable()
export class QuestionService {

    getQuestions() {

        const questions: Question<string>[] = [

            new SelectQuestion({
                key: 'My Select DropDown Question',
                label: 'Select Label',
                options: [
                  {key: 'opt1',  value: 'Opt1'},
                  {key: 'opt2',  value: 'Opt2'},
                  {key: 'opt3',   value: 'Opt3'},
                  {key: 'opt4', value: 'Opt4'}
                ],
                order: 1
              }),

              new TextQuestion({
                key: 'My Text Question',
                label: 'Text Question label',
                value: 'Default value is Excercise',
                required: true,
                order: 2
              }),

              new RadioQuestion({
                key: 'My Radio  Question',
                label: 'Radio Label',
                options: [
                  {key: 'opt1',  value: 'Opt1'},
                  {key: 'opt2',  value: 'Opt2'},
                  {key: 'opt3',   value: 'Opt3'},
                  {key: 'opt4', value: 'Opt4'}
                ],
                order: 3
              }),

              new CheckboxQuestion({
                key: 'My Checkbox Question',
                label: 'Checkbox Label',
                options: [
                  {key: 'opt1',  value: 'Opt1'},
                  {key: 'opt2',  value: 'Opt2'},
                  {key: 'opt3',   value: 'Opt3'},
                  {key: 'opt4', value: 'Opt4'}
                ],
                order: 4
              })
        ];

        // return of(questions.sort((a, b) => a.order - b.order));
        return of(questions);
    }

}