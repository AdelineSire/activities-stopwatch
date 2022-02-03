const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
	name: String,
	sessions: [
		{
			day: String,
			date: String,
			start: String,
			stop: String,
			duration: String,
		},
	],
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
