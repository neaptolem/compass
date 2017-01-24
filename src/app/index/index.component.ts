import {Component, OnInit, ViewChild}       from '@angular/core';
import {QuestionService} from '../dynamic-form/dynamic-form.service';
import {TextboxQuestion} from "../dynamic-form/question/question-textbox";
import {DropdownQuestion} from "../dynamic-form/question/question-dropdown";

@Component({
    selector: 'my-app',
    template: `
    <div>
      <dynamic-form #childComponent
        [title]="'test test'"
        [questions]="questions">
      </dynamic-form>
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
        this.questions = service.getQuestions();
    }

    clicked(){
        this.child.render(this.item);
    }

}
