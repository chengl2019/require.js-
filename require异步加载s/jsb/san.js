define(function() {　　
	var name = "Cloment";
	console.log("我是3.js");
	var getName = function() {
		console.log(name);
	}　　
	return {　　
		names: getName,
		age: 19　　
	};
});