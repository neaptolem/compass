const _ = require('underscore');
const TypeModel = require('./typeModel');
const ServiceModel = require('./serviceModel');

const codeWriter = require('./codeWriter');

class JsCodeModel {

    constructor(metaData) {
        this.models = [];
        let types = this.preProcess(metaData);
        _.each(types, type => {
            if (type.typeKind == 'ENTITY') {
                let model = new TypeModel(type);
                let service = new ServiceModel(type);

                this.models.push(model);
                this.models.push(service);
            }
        });
    }

    preProcess(data) {
        let map = {};
        _.each(data, type => {
            map[type.id] = type;
        });
        _.each(data, type => {
            _.each(type.fields, field => {
                field.fieldType = map[field.fieldType.id];
            })
        });
        return data;
    }

    build() {
        _.each(this.models, model => {
            codeWriter.write(model);
        });
    }

}

module.exports = JsCodeModel;