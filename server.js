const express = require('express');
const cors = require('cors');

// App
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// BD connection
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbConfig = require('./config/db.config.js');
const MONGODB_URI =
	process.env.MONGODB_URI ||
	`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log('Successfully connected to MongoDB.');
	})
	.catch((err) => {
		console.error('Connection error', err);
		process.exit();
	});

// Controllers
const activityController = require('./controllers/activityController');

// Routes
app.use('/activity', activityController);

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
