/*config主要配置的是路径*/
require.config({
	baseUrl: "jsl",
	paths : {
		twoo: "two",
		three: "three"
	}
})
require(['twoo', 'three'], function (twos,threes){
	console.log(twos);
});