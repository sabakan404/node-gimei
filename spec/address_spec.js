describe("A suite is address case.", function() {
    var address = gimei.address();
    var fullAddressKanji = address.kanji();
    var fullAddressHiragana = address.hiragana();
    var fullAddressKatakana = address.katakana();
    var prefectureAddressKanji = address.prefecture().kanji();
    var prefectureAddressHiragana = address.prefecture().hiragana();
    var prefectureAddressKatakana = address.prefecture().katakana();
    var cityAddressKanji = address.city().kanji();
    var cityAddressHiragana = address.city().hiragana();
    var cityAddressKatakana = address.city().katakana();
    var townAddressKanji = address.town().kanji();
    var townAddressHiragana = address.town().hiragana();
    var townAddressKatakana = address.town().katakana();

    var all = [
      fullAddressKanji
      , fullAddressHiragana
      , fullAddressKatakana
      , prefectureAddressKanji
      , prefectureAddressHiragana
      , prefectureAddressKatakana
      , cityAddressKanji
      , cityAddressHiragana
      , cityAddressKatakana
      , townAddressKanji
      , townAddressHiragana
      , townAddressKatakana
    ];

    all.forEach(function(i) {
        it (i + " is defined.", function() {
            expect(i).toBeDefined();
            expect(i).not.toBeNull();
            expect(0 < i.length).toBeTruthy();
        });
    });

    it ("type of fullAddressKanji.", function() {
        expect(fullAddressKanji).toMatch(/^(?:[々〇〻\u3400-\u9FFF\uF900-\uFAFFぁ-んァ-ン ]|[\uD840-\uD87F][\uDC00-\uDFFFぁ-んァ-ン ])+$/);
    });

    it ("type of fullAddressHiragana.", function() {
        expect(fullAddressHiragana).toMatch(/^[ぁ-ん ]+$/);
    });

    it ("type of fullAddressKatakana.", function() {
        expect(fullAddressKatakana).toMatch(/^[ァ-ン ]+$/);
    });

    it ("type of prefectureAddressKanji.", function() {
        expect(prefectureAddressKanji).toMatch(/^(?:[々〇〻\u3400-\u9FFF\uF900-\uFAFF]|[\uD840-\uD87F][\uDC00-\uDFFF])+$/);
    });

    it ("type of prefectureAddressHiragana.", function() {
        expect(prefectureAddressHiragana).toMatch(/^[ぁ-ん]+$/);
    });

    it ("type of prefectureAddressKatakana.", function() {
        expect(prefectureAddressKatakana).toMatch(/^[ァ-ン]+$/);
    });

    it ("type of cityAddressKanji.", function() {
        expect(cityAddressKanji).toMatch(/^(?:[々〇〻\u3400-\u9FFF\uF900-\uFAFFぁ-んァ-ン]|[\uD840-\uD87F][\uDC00-\uDFFFぁ-んァ-ン])+$/);
    });

    it ("type of cityAddressHiragana.", function() {
        expect(cityAddressHiragana).toMatch(/^[ぁ-ん]+$/);
    });

    it ("type of cityAddressKatakana.", function() {
        expect(cityAddressKatakana).toMatch(/^[ァ-ン]+$/);
    });

    it ("type of townAddressKanji.", function() {
        expect(townAddressKanji).toMatch(/^(?:[々〇〻\u3400-\u9FFF\uF900-\uFAFFぁ-んァ-ン]|[\uD840-\uD87F][\uDC00-\uDFFFぁ-んァ-ン])+$/);
    });

    it ("type of townAddressHiragana.", function() {
        expect(townAddressHiragana).toMatch(/^[ぁ-ん]+$/);
    });

    it ("type of townAddressKatakana.", function() {
        expect(townAddressKatakana).toMatch(/^[ァ-ン]+$/);
    });

    it ("fullAddressKanji === prefectureAddressKanji + ' ' + cityAddressKanji + ' ' + townAddressKanji.", function() {
        expect(fullAddressKanji === prefectureAddressKanji + " " + cityAddressKanji + " " + townAddressKanji).toBeTruthy();
    });

    it ("fullAddressHiragana === prefectureAddressHiragana + ' ' + cityAddressHiragana + ' ' + townAddressHiragana.", function() {
        expect(fullAddressHiragana === prefectureAddressHiragana + " " + cityAddressHiragana + " " + townAddressHiragana).toBeTruthy();
    });

    it ("fullAddressKatakana === prefectureAddressKatakana + ' ' + cityAddressKatakana + ' ' + townAddressKatakana.", function() {
        expect(fullAddressKatakana === prefectureAddressKatakana + " " + cityAddressKatakana + " " + townAddressKatakana).toBeTruthy();
    });

});

