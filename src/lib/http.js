import axios from 'axios';
import qs from 'qs';

import { JUHE_APPKEY } from '@/config/key'

function axiosPost (options) {
	axios({
		url: options.url,
		method: 'post',
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: qs.stringify({
			...options.data,
			key: JUHE_APPKEY
		})
	})
	.then(( res ) => {
		options.success(res.data);
	})
	.catch(( err ) => {
		options.error(err);
	})
}

export {
	axiosPost
}
