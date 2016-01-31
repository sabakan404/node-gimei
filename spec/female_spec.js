describe("A suite is female case.", function() {
    var female = gimei.female();
    var fullNameKanji = female.kanji();
    var isMale = female.isMale();
    var isFemale = female.isFemale();

    var all = [
      fullNameKanji
      , isMale
      , isFemale
    ];

    all.forEach(function(i) {
        it (i + " is defined.", function() {
            expect(i).toBeDefined();
            expect(i).not.toBeNull();
        });
    });

    it ("type of fullNameKanji.", function() {
        expect(fullNameKanji).toMatch(/^(?:[々〇〻\u3400-\u9FFF\uF900-\uFAFF ]|[\uD840-\uD87F][\uDC00-\uDFFF ])+$/);
    });

    it ("is male.", function() {
        expect(isMale).not.toBeTruthy();
    });

    it ("is female.", function() {
        expect(isFemale).toBeTruthy();
    });

});

