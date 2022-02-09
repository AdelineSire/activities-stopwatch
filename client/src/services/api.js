import axios from 'axios';
import API_URL from './config';

const createActivity = (activity) => {
	console.log('activity in create..', activity);
	return axios
		.post(API_URL + 'activity', activity)
		.then(() => {
			return { message: 'success' };
		})
		.catch((err) => {
			console.log('err', err);
			return { message: err };
		});
};

const getActivity = (id) => {
	return axios
		.get(API_URL + 'activity/' + id)
		.then((res) => res.data)
		.catch((err) => {
			console.log('err', err);
		});
};

const getActivities = () => {
	return axios
		.get(API_URL + 'activity/')
		.then((res) => res.data)
		.catch((err) => {
			console.log('err', err);
		});
};

export { createActivity, getActivity, getActivities };
