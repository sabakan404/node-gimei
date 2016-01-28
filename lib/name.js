
'use strict';

module.exports = {

    names : [],
    gender : "male",
    firstNames : [],
    lastNames : [],
    firstNamesIndex : 0,
    lastNamesIndex : 0,
    isFirst : false,
    isLast : false,

    setNames : function(names) {
        this.names = names;
        return this;
    },

    setGender : function(gender) {
        this.gender = gender;
        this.firstNames = this.names['first_name'][this.gender];
        this.lastNames = this.names['last_name'];
        this.firstNamesIndex = Math.ceil(Math.random() * this.firstNames.length);
        this.lastNamesIndex = Math.ceil(Math.random() * this.lastNames.length);
        return this;
    },

    isMale : function() {
        return this.gender === 'male';
    },

    isFemale : function() {
        return this.gender === 'female';
    },

    first : function() {
        this.isFirst = true;
        return this;
    },

    last : function() {
        this.isLast = true;
        return this;
    },

    kanji : function() {
        return this.createName(0);
    },

    hiragana : function() {
        return this.createName(1);
    },

    katakana : function() {
        return this.createName(2);
    },

    createFirstName : function(i) {
        return this.firstNames[this.firstNamesIndex][i];
    },

    createLastName : function(i) {
        return this.lastNames[this.lastNamesIndex][i];
    },

    createFullName : function(i) {
        return this.createLastName(i) + " " + this.createFirstName(i);
    },

    createName : function(i) {
        var str = "";
        if (this.isFirst) {
            str = this.createFirstName(i);
            this.isFirst = false;
        } else if (this.isLast) {
            str = this.createLastName(i);
            this.isLast = false;
        } else {
            str = this.createFullName(i);
        }
        return str;
    }

};

