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
		.then(rep => res.json({ msg: "deleteActivity by id - Activity deleted" }))
		.catch(err => { console.log("deleteActivity by id -  err ", err); })
}

const updateActivity = (req, res) =>
{
	const activityId = req.params.id;

	const mesDonnes = req.body.mesDonnees;
	const json = JSON.parse(mesDonnes);

	console.log("updateActivity : mesDonnees ", json)

	// Ici starDate semble une string
	// recreer une Date avec new Date(startDate)
	const startDate = json.startDate;
	const stopDate = json.stopDate;
	console.log("updateActivity ", startDate)
	const delta = new Date(stopDate.getTime() - startDate.getTime());

	const data = {
		day: startDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }).getDay(),
		date: startDate.toLocaleString('fr-FR', { year: 'numeric', month: 'numeric', day: 'numeric' }),
		start: startDate.getHours().toString() + ":" + startDate.getMinutes().toString(),
		stop: stopDate.getHours().toString() + ":" + stopDate.getMinutes().toString(),
		duration: delta.getHours().toString() + ":" + delta.getMinutes().toString()
	}

	Activity.updateOne({ _id: activityId }, { $push: { sessions: data } })
		.then(() => res.json({ msg: "updateOne ok" }))
		.catch((err) =>
		{
			console.log('err', err);
		});
};

router.route('/').post(createActivity);
router.route('/').get(getActivities);
router.route('/:id').get(getActivity);
router.route('/:id').delete(deleteActivity);
router.route('/:id').put(updateActivity);
module.exports = router;
