const express = require("express");

const app = express();

app.use((req, res) => {
	res.send("Hello from the server new");
});

// app.use("/test", (req, res) => {
// 	res.send("test");
// });

app.listen(3000, () => {
	console.log("server is successfully listening on port 3000");
});
