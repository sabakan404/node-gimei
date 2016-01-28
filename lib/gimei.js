
'use strict';

var yaml = require('js-yaml');
var fs = require('fs');

module.exports = {

    nameObj : null,
    addressObj : null,

    name : function() {
        if (this.nameObj === null) {
            var names = yaml.safeLoad(fs.readFileSync( __dirname + '/../lib/data/names.yml', 'utf8'));
            this.nameObj = require('./name.js').setNames(names).setGender(Math.round(Math.random()+1) === 1 ? 'male' : 'female');
        }
        return this.nameObj;
    },

    male : function() {
        return this.name().setGender('male');
    },

    female : function() {
        return this.name().setGender('female');
    },

    address : function() {
        if (this.addressObj === null) {
            var addresses = yaml.safeLoad(fs.readFileSync( __dirname + '/../lib/data/addresses.yml', 'utf8'));
            this.addressObj = require('./address.js').setAddresses(addresses);
        }
        return this.addressObj;
    }

};

