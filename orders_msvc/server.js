const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to Uncaught Exception`);
	process.exit(1);
});

// Config

// Connecting to database
connectDatabase();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(5001, () => {
	console.log(`Server is working on http://localhost:5001`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to Unhandled Promise Rejection`);

	server.close(() => {
		process.exit(1);
	});
});
