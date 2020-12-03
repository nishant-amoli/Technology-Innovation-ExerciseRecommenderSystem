// Reference: https://angular.io/guide/dynamic-form

import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from './question';

@Injectable()
export class QuestionControlService {
    constructor() { }

    toFormGroup(questions: Question<string>[]) {

        const group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }
}