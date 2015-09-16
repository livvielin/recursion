// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
	
	/*
	var result = [];
	var nodes = document.childNodes;

	var nodeLoop = function(nodeList) {
		for (var i = 0; i < nodeList.length; i++) {
			var node = nodeList[i];
			var classes = node.classList;
			if (classes) {
				for (var j = 0; j < classes.length; j++) {
					if (classes[j] === className) {
						result.push(node);
					}
				}
			}
			if (node.childNodes) {
				nodeLoop(node.childNodes);
			}
		}
	}

	nodeLoop(nodes);

	return result;
	*/

	var result = [];
	node = node || document.body;
	for (var i = 0; i < node.classList.length; i++) {
		if (node.classList[i] === className) {
			result.push(node);
		} else if (node.childNodes) {
			for (var j = 0; j < node.childNodes.length; j++) {
				return getElementsByClassName(className, node.childNodes[j]);
			}
		}
	}
	return result;

};
