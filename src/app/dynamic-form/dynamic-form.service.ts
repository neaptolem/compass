import {Injectable}       from '@angular/core';
import {DropdownQuestion} from './question/question-dropdown';
import {QuestionBase}     from './question/question-base';
import {TextboxQuestion}  from './question/question-textbox';

@Injectable()
export class QuestionService {

    map: any = {};
    map2: any = {};

    constructor() {
        [
            TextboxQuestion,
            DropdownQuestion
        ].forEach(q => {
            this.map[q.getControlType()] = q;
        });
        this.map2 = {
            "REGULAR": "textbox",
            "COLLECTION": "dropdown"
        };
    }

    getQuestions() {
        let meta: any[] = [
            {
                fieldKind: "COLLECTION",
                key: 'brave',
                label: 'Bravery Rating',
                required: false,
                order: 3
            },
            {
                fieldKind: "REGULAR",
                key: 'firstName',
                label: 'First name',
                required: true,
                order: 1
            },
            {
                fieldKind: "REGULAR",
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                required: false,
                order: 2
            }
        ];
        let questions: QuestionBase[] = [];
        meta.forEach(m => {
            let controlType = this.map2[m.fieldKind];
            let control = new this.map[controlType](m);
            questions.push(control);
        });
        return questions.sort((a, b) => a.order - b.order);
    }
}
