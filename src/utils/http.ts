import axios from 'axios';

import { API_URL, API_READ_TOKEN } from '@/constants/environment';

const http = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: `Bearer ${API_READ_TOKEN}`,
	},
});

export default http;
