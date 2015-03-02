var http = require ('http');
var bye = require("./bye_module");
var express = require("express");

http.createServer(function(req, res){
	res.writeHead(200);// 200 is success
	res.write("Congrats, req start");
	setTimeout(function(){
		res.write("haha, req stop");
		
	}, 10000); //10 seconds, it will end
	res.end();
}).listen(8888, function(){

	bye.listenit();


});






