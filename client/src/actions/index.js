import axios from 'axios';
import { FETCH_USER } from './types';
// import proxy from 'http-proxy-middleware';
//proxy for redirect client route to backend API route

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token);
	dispatch({ type: FETCH_USER, payload: res.data });
};