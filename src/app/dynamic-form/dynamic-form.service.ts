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

    toQuestion(meta : any[]) {
        let questions: QuestionBase[] = [];
        meta.forEach(m => {
            let controlType = this.map2[m.fieldKind];
            let control = new this.map[controlType](m);
            questions.push(control);
        });
        return questions.sort((a, b) => a.order - b.order);
    }
}
