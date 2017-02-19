const _ = require('underscore');

var utils = {

    dashedName(input) {
        let name = [];
        let word = '';
        _.each(input, (letter, ind) => {
            if (letter == letter.toUpperCase()) {
                ind && name.push(word);
                word = letter.toLowerCase();
            } else {
                word += letter;
            }
        });
        name.push(word)
        return name.join('-');
    }
}

module.exports = utils;