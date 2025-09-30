const { MongoClient } = require("mongodb");

// Create monogo db accont
// Create a free M0 cluster
// create a user
// set the connection string
// Install mongo DB compass
// Install mongodb package from npm
// Create a connection from code
// CRUD operation
//

const url =
	"mongodb+srv://ayush_db_user:LCsFHgd7RsqpysT3@namastenode.xeejahk.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log("Connected successfully to server");
	const db = client.db(dbName);
	const collection = db.collection("User");

	const data = {
		firstname: "test",
		lastname: "user",
		city: "Mumbai",
		phoneNumber: "123123",
	};

	const insertResult = await collection.insertMany([data]);
	console.log("Inserted documents =>", insertResult);

	// the following code examples can be pasted here...
	const findResult = await collection.find({}).toArray();
	console.log("Found documents =>", findResult);
	return "done.";
}

main()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());
