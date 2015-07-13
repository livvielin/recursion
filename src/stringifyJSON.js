// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	var arrayResult = [];
	var objResult = [];

	if (typeof obj === "string") {
		return '"' + obj + '"';
	}

	else if (typeof obj === "number" || obj === null || typeof obj === "boolean") {
		return "" + obj;
	}

	else if (Array.isArray(obj)) {
		if (obj[0] === undefined) {
			return '[]';
		}
		for (var i = 0; i < obj.length; i++) {
			arrayResult.push(stringifyJSON(obj[i]));
		}
		return '[' + arrayResult.join(',') + ']';
	}

	else if (typeof obj === "object") {
		var keys = Object.keys(obj);
		if (keys[0] === undefined || typeof obj[keys[0]] === "undefined" || typeof obj[keys[0]] === "function") {
			return '{}';
		}
		for (var i = 0; i < keys.length; i++) {
			var keyString = stringifyJSON(keys[i]);
			var valString = stringifyJSON(obj[keys[i]]);
			objResult.push(keyString + ':' + valString);
		}

		return '{' + objResult.join(',') + '}';
	}

};
