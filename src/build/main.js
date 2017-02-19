const axios = require('axios');
const _ = require('underscore');
const JsCodeModel = require('./jsCodeModel');

//maps.lnu.edu.ua/api

axios.get('http://localhost:8080/resources/types.json')
    .then(types => {
        let jsCodeModel = new JsCodeModel(types.data);
        jsCodeModel.build();
    })
    .catch(e => {
        console.log(e);
    });