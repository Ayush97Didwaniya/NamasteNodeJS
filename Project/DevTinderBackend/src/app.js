const express = require("express");

const { connectDB } = require("./config/database");

const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");

app.use(express.json());

app.post("/signup", async (req, res) => {
	// const userObj = {
	// 	firstName: "Ayush",
	// 	lastName: "did",
	// 	emailId: "ayush.didwaniya@gmail.com",
	// 	password: "123",
	// };

	// Validation of Data
	try {
		validateSignUpData(req);

		const { firstName, lastName, emailId, password } = req.body;

		// encrypt the password
		const passwordHash = await bcrypt.hash(password, 10);
		console.log(passwordHash);

		// Creating a new instance of a User Model
		const user = new User({
			firstName,
			lastName,
			emailId,
			password: passwordHash,
		});

		await user.save();
		res.send("User Added successfully");
	} catch (err) {
		res.status(400).send("Error saving the user:" + err.message);
	}
});

app.post("/login", async (req, res) => {
	try {
		const { emailId, password } = req.body;

		const user = await User.findOne({ emailId });
		if (!user) {
			throw new Error("Invalid credentials");
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (isPasswordValid) {
			res.send(user);
		} else {
			throw new Error("Invalid credentials");
		}
	} catch (err) {
		res.status(400).send("Error:" + err.message);
	}
});

// Get user by email
app.get("/user", async (req, res) => {
	const userEmail = req.body.emailId;

	try {
		const users = await User.findOne({ emailId: userEmail });
		if (users.length === 1) {
			res.status(404).send("User not found");
		} else {
			res.send(users);
		}
	} catch (err) {
		res.status(400).send("Something went wrong");
	}
});
// Feed API - get /feed - get all the users from the database
app.get("/feed", async (req, res) => {
	try {
		const users = await User.find({});
		if (users.length === 1) {
			res.status(404).send("User not found");
		} else {
			res.send(users);
		}
	} catch (err) {
		res.status(400).send("Something went wrong");
	}
});

// delet a user from the database
app.delete("/user", async (req, res) => {
	const userId = req.body.userId;
	try {
		console.log("userId", userId);
		// const user = await User.findByIdandDelete({ _id: userId });
		const user = await User.findByIdAndDelete(userId);
		res.send("User deleted successfully");
	} catch (err) {
		res.status(400).send("Something went wrong");
	}
});

//  Update data of user
app.patch("/user/:userId", async (req, res) => {
	const userId = req.params.userId;
	const data = req.body;

	try {
		// await User.findByIdAndUpdate({ _id: userId }, data, {
		// 	returnDocument: "before",
		// });
		// await User.findByIdAndUpdate({ _id: userId }, data, {
		// 	returnDocument: "before",
		// });
		// by default it return before the update value;
		const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

		const isUpdateAllowed = Object.keys(data).every((key) =>
			ALLOWED_UPDATES.includes(key)
		);
		if (!isUpdateAllowed) {
			throw new Error("Update not allowed");
		}
		if (data?.skills.length > 10) {
			throw new Error("Skills cannot be more then 10");
		}
		const user = await User.findByIdAndUpdate({ _id: userId }, data, {
			returnDocument: "after",
			runValidators: true,
		});
		console.log(user);
		res.send("User Updated successfully");
	} catch (err) {
		res.status(400).send("Update Failed: " + err.message);
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
