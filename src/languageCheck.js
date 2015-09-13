var betterWords = {"ninja":["professional", "expert"], "bro":["person"]}

var getBadWords = function(originalText) {
	return originalText
			.toLowerCase()
			.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()0-9]/g,"")
			.split(" ")
			.filter(function(word) { 
				return Object.keys(betterWords).indexOf(word) !== -1
			})
}

var getBetterWords = function(badWord) {
	return betterWords[badWord];
}

var gatherSuggestions = function(text) {
	var words = getBadWords(text);
	var suggestions = {}
	for (var i = 0, len = words.length; i < len; i++) {
		suggestions[words[i]] = getBetterWords(words[i]);
	} 
	return suggestions
}


var parseJobAd = function(jobAd) {
	return {
		"original": jobAd,
		"suggestions": gatherSuggestions(jobAd)
	}
}

module.exports = {
	getBadWords: getBadWords,
	getBetterWords: getBetterWords,
	parseJobAd: parseJobAd
}