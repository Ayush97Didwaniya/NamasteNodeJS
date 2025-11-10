const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
	res.send("Hello get api called");
});

app.get("/user/:userId/:name/:pass", (req, res) => {
	console.log(req.params);
	res.send({ name: "ayush" });
});

app.post("/user", (req, res) => {
	res.send("Data Successfully saved to the database");
});

app.delete("/hello", (req, res) => {
	res.send("Hello delete api called");
});

// this will handle all the api calls to /hello
app.use("/hello", (req, res) => {
	res.send("Hello api called");
});

// this will handle only get api calls to /hello
app.use("test", (req, res) => {
	res.send("Hello from the server new");
});
// app.use("/test", (req, res) => {
// 	res.send("test");
// });

app.listen(3000, () => {
	console.log("server is successfully listening on port 3000");
});
