const express = require('express');
const router = express.Router();

const Activity = require('../models/activity');

const createActivity = (req, res) =>
{
	console.log('req', req.body);
	const name = req.body.toto;

	const activity = new Activity({ name });

	activity
		.save(activity)
		.then(() =>
		{
			res.json({ msg: 'activity added' })
		})
		.catch((err) =>
		{
			console.log('err', err);
		});
};

const getActivity = (req, res) =>
{
	const id = req.params.id;
	Activity.findOne({ name: id }) // XXX
		.then((activity) => res.json(activity))
		.catch((err) =>
		{
			console.log('err', err);
		});
};

const getActivities = (req, res) =>
{
	Activity.find({})
		.then((activities) =>
		{
			res.json(activities);
		})
		.catch((err) => console.log('err', err));
};

const deleteActivity = (req, res) =>
{
	Activity.findByIdAndRemove(req.params.id)
		.then(rep => res.json({msg: "deleteActivity by id - Activity deleted"}))
		.catch(err => { console.log("deleteActivity by id -  err ", err); })
}

router.route('/').post(createActivity);
router.route('/').get(getActivities);
router.route('/:id').get(getActivity);
router.route('/:id').delete(deleteActivity);
module.exports = router;
