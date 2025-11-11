const mongoose = require("mongoose");

const connectDB = async () => {
	await mongoose.connect(
		"mongodb+srv://ayush_db_user:LCsFHgd7RsqpysT3@namastenode.xeejahk.mongodb.net/devTinder"
	);
};

module.exports = {
	connectDB,
};
