// Reference: https://angular.io/guide/dynamic-form
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from './question/question';
import { QuestionControlService } from './question/question-control.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './survey-form.component.html',
    providers: [QuestionControlService]
})
export class SurveyFormComponent implements OnInit {

    @Input() questions: Question<string>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService) { }

    ngOnInit() {
        // console.log(this.questions);
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
        if (this.payLoad) {
            console.log(this.payLoad);
        }
    }
}

