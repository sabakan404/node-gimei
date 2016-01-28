
'use strict';

module.exports = {

    addresses : [],
    prefectures : [],
    cities : [],
    towns : [],
    prefectureIndex : 0,
    cityIndex : 0,
    townIndex : 0,
    isPrefecture : false,
    isCity : false,
    isTown : false,

    setAddresses : function(addresses) {
        this.addresses = addresses['addresses'];
        this.prefectures = this.addresses['prefecture'];
        this.cities = this.addresses['city'];
        this.towns = this.addresses['town'];
        this.prefectureIndex = Math.ceil(Math.random() * this.prefectures.length);
        this.cityIndex = Math.ceil(Math.random() * this.cities.length);
        this.townIndex = Math.ceil(Math.random() * this.towns.length);
        return this;
    },

    prefecture : function() {
        this.isPrefecture = true;
        return this;
    },

    city : function() {
        this.isCity = true;
        return this;
    },

    town : function() {
        this.isTown = true;
        return this;
    },

    kanji : function() {
        return this.createAddress(0);
    },

    hiragana : function() {
        return this.createAddress(1);
    },

    katakana : function() {
        return this.createAddress(2);
    },

    createPrefecture : function(i) {
        return this.prefectures[this.prefectureIndex][i];
    },

    createCity : function(i) {
        return this.cities[this.cityIndex][i];
    },

    createTown : function(i) {
        return this.towns[this.townIndex][i];
    },

    createFullAddress : function(i) {
        return this.createPrefecture(i) + " " + this.createCity(i) + " " + this.createTown(i);
    },

    createAddress : function(i) {
        var str = "";
        if (this.isPrefecture) {
            str = this.createPrefecture(i);
            this.isPrefecture = false;
        } else if (this.isCity) {
            str = this.createCity(i);
            this.isCity = false;
        } else if (this.isTown) {
            str = this.createTown(i);
            this.isTown = false;
        } else {
            str = this.createFullAddress(i);
        }
        return str;
    }

};

