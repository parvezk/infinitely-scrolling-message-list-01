import { useEffect, useCallback, useRef } from 'react';

const url = 'https://message-list.appspot.com';
export const useFetch = ({ pageToken, limit, page }, dispatch, dispatchPager) => {
	const endpoint = `${url}/messages?pageToken=${pageToken}&limit=${limit}`;
	console.log('useFetch');
	useEffect(() => {
		dispatch({ type: 'FETCH_MSGS', fetching: true });

		fetch(endpoint)
			.then((response) => response.json())
			.then(({ messages, pageToken }) => {
				dispatch({
					type: 'LOAD_MSGS',
					messages
				});
				dispatchPager({
					type: 'UPDATE_TOKEN',
					pageToken
				});
				dispatch({ type: 'FETCH_MSGS', fetching: false });
			})
			.catch((error) => new Error(error));
	}, [page, dispatch]);
};
