const http = require("node:http"); // node says its a native module

const server = http.createServer(function (req, res) {
	//reply to user with hello world
	res.end("hello world");
});

server.listen(3333);
