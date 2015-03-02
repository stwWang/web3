var request = require("request");
var url = require("url");
var express = require("express");

var app = express();

app.get('/tweets/:username', function(req, res){
	var username = req.params.username;
	options = {
		protocol: "http:",
		host: "www.amazon.com",
		pathname:"/s/ref=nb_sb_noss",
		query: {"field-keywords": username}
	}
	var twitterUrl = url.format(options);
	request(twitterUrl).pipe(res);
})

app.get('/miBand', function(req, res){
	res.sendFile(__dirname + "/index.html");
})

app.get('/service', function(req, res){
	res.sendFile(__dirname + "/service.html");
})

app.get('/css/:filename', function(req, res){

	res.sendFile(__dirname + "/css/" + req.params.filename);
})

app.get('/js/:filename', function(req, res){

	res.sendFile(__dirname + "/js/" + req.params.filename);
})

app.listen(8019)