import {Component, Input, OnInit}  from '@angular/core';
import {FormGroup}                 from '@angular/forms';
import {QuestionBase}              from './question/question-base';
import {QuestionControlService}    from './question/question-control.service';
import {Service} from "../common/service.service";
import {QuestionService} from "./dynamic-form.service";

@Component({
    selector: 'dynamic-form',
    templateUrl: 'dynamic-form.component.html',
    providers: [QuestionControlService, QuestionService]
})
export class DynamicFormComponent implements OnInit {

    ngOnInit(): void {
        this.questions = this.qs.toQuestion(this.service.getFields());
        console.log(this.questions);
        this.form = this.qcs.toFormGroup(this.questions);
    }

    questions: QuestionBase[] = [];
    title: string;

    @Input() service: Service<any>;

    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService, private qs : QuestionService) {
    }

    render(item : any) {
        this.form.reset(item);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

}
