node-gimei
=========================

gimeiのNode.js版です。架空の日本人名や住所文字列を作成します。  
テストデータの作成などにどうぞ。

Install
---------

    $ npm install node-gimei

Usage
--------------

### name()

架空の人物名を返します。

    var gimei = require('node-gimei');
    var name = gimei.name();
    console.log(name.kanji());             // "斎藤 陽菜"
    console.log(name.hiragana());          // "さいとう はるな"
    console.log(name.katakana());          // "サイトウ ハルナ"
    console.log(name.last().kanji());      // "斎藤"
    console.log(name.last().hiragana());   // "さいとう"
    console.log(name.last().katakana());   // "サイトウ"
    console.log(name.first().kanji());     // "陽菜"
    console.log(name.first().hiragana());  // "はるな"
    console.log(name.first().katakana());  // "ハルナ"

### male()

架空の男性名を返します。

    var gimei = require('node-gimei');
    var male = gimei.male();
    console.log(male.kanji());             // "小林 顕士"
    console.log(male.isMale());            // true
    console.log(male.isFemale());          // false

### female()

架空の女性名を返します。

    var gimei = require('node-gimei');
    var female = gimei.female(); 
    console.log(female.kanji());           // "根本 彩世"
    console.log(female.isMale());          // false
    console.log(female.isFemale());        // true

### address()

架空の住所を返します。

    var gimei = require('node-gimei');
    var address = gimei.address();
    console.log(address.kanji());                  // 岡山県大島郡大和村稲木町
    console.log(address.hiragana());               // おかやまけんおおしまぐんやまとそんいなぎちょう
    console.log(address.katakana());               // オカヤマケンオオシマグンヤマトソンイナギチョウ
    console.log(address.prefecture().kanji());     // 岡山県
    console.log(address.prefecture().hiragana());  // おかやまけん
    console.log(address.prefecture().katakana());  // オカヤマケン
    console.log(address.city().kanji());           // 大島郡大和村
    console.log(address.city().hiragana());        // おおしまぐんやまとそん
    console.log(address.city().katakana());        // オオシマグンヤマトソン
    console.log(address.town().kanji());           // 稲木町
    console.log(address.town().hiragana());        // いなぎちょう
    console.log(address.town().katakana());        // イナギチョウ

Link
------

* https://github.com/willnet/gimei

