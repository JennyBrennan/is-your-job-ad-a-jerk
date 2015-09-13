var getBadWords = require("../src/languageCheck.js").getBadWords
var getBetterWords = require("../src/languageCheck.js").getBetterWords
var parseJobAd = require("../src/languageCheck.js").parseJobAd

describe('Word finder', function () {
    it('identifies any bad words in the text', function () {
        var words = getBadWords("Total super awesome ninja");
        expect(words).toEqual(["ninja"]);
    });

    it('ignores capitalisation', function () {
	    var words = getBadWords("Total super awesome Ninja");
	    expect(words).toEqual(["ninja"]);
    });

    it('ignores non-letters', function () {
	    var words = getBadWords("Total super awesome ninja.");
	    expect(words).toEqual(["ninja"]);
    });
});

describe('Better word suggester', function () {
    it('suggests alternative words for bad words in the text', function () {
        var words = getBetterWords("ninja");
        expect(words).toEqual(["professional","expert"]);
    });
});

describe('Job ad parser', function () {
	it('parses the job ad and gives problem and possible replacement words', function () {
		var output = parseJobAd("Total super awesome ninja bro");
		expect(output).toEqual({
			"original": "Total super awesome ninja bro",
			"suggestions": {
				"ninja": ["professional", "expert"],
				"bro": ["person"]
			}
		})
	});
});