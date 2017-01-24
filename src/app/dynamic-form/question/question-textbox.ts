import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase {

    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.controlType = TextboxQuestion.getControlType();
        this.type = options['type'] || '';
    }
    static getControlType(){
        return "textbox";
    }
}
