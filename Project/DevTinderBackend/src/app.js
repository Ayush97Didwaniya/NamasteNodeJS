const express = require("express");

const { connectDB } = require("./config/database");

const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
	console.log(req.body);
	// const userObj = {
	// 	firstName: "Ayush",
	// 	lastName: "did",
	// 	emailId: "ayush.didwaniya@gmail.com",
	// 	password: "123",
	// };

	const userObj = req.body;

	// Creating a new instance of a User Model
	const user = new User(userObj);

	try {
		await user.save();
		res.send("User Added successfully");
	} catch (err) {
		res.status(400).send("Error saving the user:");
	}
});

connectDB()
	.then(() => {
		console.log("Database connection establised...");

		app.listen(7777, () => {
			console.log("Server is successfully listening on port 7777...");
		});
	})
	.catch((err) => {
		console.error("Database cannot be connected");
	});
