// Reference: https://angular.io/guide/dynamic-form
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from './question/question';
import { QuestionControlService } from './question/question-control.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './survey-form.component.html',
    providers: [QuestionControlService]
})
export class SurveyFormComponent implements OnInit {

    @Input() questions: Question<string>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService,
        private router: Router) { }

    ngOnInit() {
        // console.log(this.questions);
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
        if (this.payLoad) {
            // Save payLoad to database.
            //console.log(this.payLoad);
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/dashboard'], { queryParams: { active: 1 } });
        }
    }
}

