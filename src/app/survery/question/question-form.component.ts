import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from './question';


@Component({
    selector: 'app-question',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {

    @Input() question: Question<string>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.question.key].valid; }
}