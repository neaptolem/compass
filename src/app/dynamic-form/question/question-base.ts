export abstract class QuestionBase {

    key: string;
    label: string;
    required: boolean;
    order: number;
    fieldKind: string;
    controlType?: string;

    constructor(options: {
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        fieldKind?: string
    } = {}) {
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.fieldKind = options.fieldKind || '';
    }

    static getControlType(): string {
        throw "getControlType() must be overrided";
    };
}
