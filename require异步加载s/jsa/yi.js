alert("yi");
require.config({
	baseUrl: "jsb",
	paths: {
		"ers": "er",
		"sans": "san"
	}
})
require(['ers', 'sans'], function(erk, sank) {
	console.log(erk);
	console.log(sank);
});