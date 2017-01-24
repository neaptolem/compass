import {Injectable}   from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {QuestionBase} from './question-base';

@Injectable()
export class QuestionControlService {

    constructor() {
    }

    toFormGroup(questions: QuestionBase[]) {
        let group: any = {};
        questions.forEach(question => {
            group[question.key] = question.required
                ? new FormControl('', Validators.required)
                : new FormControl('');
        });
        console.log(group);
        return new FormGroup(group);
    }
}
