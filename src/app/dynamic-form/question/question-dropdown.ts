import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase {

    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.controlType = DropdownQuestion.getControlType();
        this.options = options['options'] || [];
    }

    static getControlType(){
        return "dropdown";
    }
}
