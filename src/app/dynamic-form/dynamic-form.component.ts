import {Component, Input, OnInit}  from '@angular/core';
import {FormGroup}                 from '@angular/forms';
import {QuestionBase}              from './question/question-base';
import {QuestionControlService}    from './question/question-control.service';
@Component({
    selector: 'dynamic-form',
    templateUrl: 'dynamic-form.component.html',
    providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

    ngOnInit(): void {
        this.form = this.qcs.toFormGroup(this.questions);
    }

    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService) {
    }

    render(item : any) {
        this.form.reset(item);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

}
