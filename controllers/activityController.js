const express = require('express');
const router = express.Router();

const Activity = require('../models/activity');

const createActivity = (req, res) => {
	console.log('req', req.body);
	const name = req.body.toto;

	const activity = new Activity({ name });

	activity
		.save(activity)
		.then(() => console.log('activity added'))
		.catch((err) => {
			console.log('err', err);
		});
};

const getActivity = (req, res) => {
	const id = req.params.id;
	Activity.findOne({ name: id })
		.then((activity) => res.json(activity))
		.catch((err) => {
			console.log('err', err);
		});
};

const getActivities = (req, res) => {
	Activity.find({})
		.then((activities) => {
			res.json(activities);
		})
		.catch((err) => console.log('err', err));
};

router.route('/').post(createActivity);
router.route('/').get(getActivities);
router.route('/:id').get(getActivity);
module.exports = router;
