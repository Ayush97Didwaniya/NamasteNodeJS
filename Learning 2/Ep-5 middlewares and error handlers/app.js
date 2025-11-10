const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();

app.use(
	"/user",
	(req, res, next) => {
		// Route Handler
		// res.send("Route Handler 1");
		console.log("Handling the route user 1!");
		//  res.send("Response 1 !!");
		next();
	},
	(req, res) => {
		// Route Handler
		// res.send("Route Handler 1");
		console.log("Handling the route user 2!");
		res.send("Response 2 !!");
	}
);

// or

// app.use("/user", (req, res, next) => {
// 	// Route Handler
// 	// res.send("Route Handler 1");
// 	console.log("Handling the route user 1!");
// 	//  res.send("Response 1 !!");
// 	next();
// });

// app.get("/user", (req, res) => {
// 	// Route Handler
// 	// res.send("Route Handler 1");
// 	console.log("Handling the route user 2!");
// 	res.send("Response 2 !!");
// });

// GEt /users => middleware chain => request handler

// app.get("/admin/getAllData", (req, res) => {
// 	// Logic of fetching all data
// 	const token = "xyz";
// 	const isAdminAuthorized = token === "xyz";
// 	if (isAdminAuthorized) {
// 		res.send("All Data Sent");
// 	} else {
// 		res.status(401).send("unauthorized request");
// 	}

// 	res.send("ALl data sent");
// });

// app.get("admin/deletUser", (req, res) => {
// 	const token = "xyz";
// 	const isAdminAuthorized = token === "xyz";
// 	if (isAdminAuthorized) {
// 		res.send("Delete a user sent");
// 	} else {
// 		res.status(401).send("unauthorized request");
// 	}
// });

// Handle Auth Middleware for all Get, put, post, delete... requests
app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
	// Logic of fetching all data
	const token = "xyz";
});

app.get("/admin/deletUser", (req, res) => {
	res.send("Delete a user sent");
});

// Error handling
// app.get("/getUserData", (req, res) => {
// 	// Logic of DB call and get user data

// 	throw new Error("dvbzhjf");
// 	res.send("User Data Send");
// });

// app.use("/", (err, req, res, next) => {
// 	if (err) {
// 		// res.status(500).send("something went wrong");
// 	}
// });

// or
app.get("/getUserData", (req, res) => {
	// Logic of DB call and get user data
	// throw new Error("dvbzhjf");
	// res.send("User Data sent");
	try {
		throw new Error("dvbzhjf");
		res.send("User Data sent");
	} catch (err) {
		res.status(500).send(err.message);
	}
});

app.listen(7777, () => {
	console.log("Server is successfully listening to port 7777...");
});
