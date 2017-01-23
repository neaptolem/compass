import {Component, OnInit, ViewChild}       from '@angular/core';
import {QuestionService} from '../dynamic-form/dynamic-form.service';
import {TextboxQuestion} from "../dynamic-form/question/question-textbox";
import {DropdownQuestion} from "../dynamic-form/question/question-dropdown";

@Component({
    selector: 'my-app',
    template: `
    <div>
      <dynamic-form #childComponent [questions]="questions">
      </dynamic-form>
      <button (click)="clicked()">1</button>
    </div>
  `,
    providers: [QuestionService]
})
export class IndexComponent {

    questions: any[];
    item: any = {
        firstName: "name"
    };

    @ViewChild('childComponent') child : any;

    constructor(service: QuestionService) {
        this.questions = [
            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    {key: {id: 5},  value: 'Solid'},
                    {key: {id: 7},  value: 'Great'}
                ],
                order: 3
            }),
            new TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),
            new TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ].sort((a, b) => a.order - b.order);
    }

    clicked(){
        this.child.render(this.item);
    }

}
