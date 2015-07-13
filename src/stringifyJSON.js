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
		//
	}

};
