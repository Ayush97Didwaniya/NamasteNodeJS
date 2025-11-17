const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
		},
		emailId: {
			type: String,
			lowercase: true,
			required: true,
			unique: true,
			trim: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Invalid Email address: " + value);
				}
			},
		},
		password: {
			type: String,
			required: true,
			validate(value) {
				if (!validator.isStrongPassword(value)) {
					throw new Error("Enter a strong password: " + value);
				}
			},
		},
		age: {
			type: Number,
		},
		gender: {
			type: String,
			validate(value) {
				if (!["male", "female", "others"].includes(value)) {
					throw new Error("Gender data is not valid");
				}
			},
		},
		photoUrl: {
			type: String,
			default: "https://tamilnaducouncil.ac.in/dummy-avatar/",
			validate(value) {
				if (!validator.isURL(value)) {
					throw new Error("Invalid Photo Url" + value);
				}
			},
		},
		about: {
			type: String,
			default: "This a default about of the user!",
		},
		skills: {
			type: [String],
		},
	},
	{
		timestamps: true,
	}
);

// const userModel = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);

// const User = mongoose.model("User", userSchema);

// module.exports = User;
