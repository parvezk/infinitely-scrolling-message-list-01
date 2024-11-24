import { useState, useEffect, useReducer, useRef } from 'react';
// Components
import Messages from './components/Messages';
//Reducers
import { pageReducer, msgReducer } from './reducers/reducers';
// Hooks
import { useFetch } from './hooks/useFetch';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';

import './styles.css';

const initPage = {
	page: 0,
	limit: 5,
	pageToken: '',
	params: ''
};

export default function App() {
	// Ref
	let viewportBottomRef = useRef(null);
	// Reducers
	const [pager, pagerDispatch] = useReducer(pageReducer, initPage);
	const [msgData, msgDispatch] = useReducer(msgReducer, {
		list: [],
		fetching: true
	});
	// Cutom hooks
	useFetch(pager, msgDispatch, pagerDispatch);
	useInfiniteScroll(viewportBottomRef, pagerDispatch);
	console.log('rendered');
	return (
		<div className="container">
			{/* <Header /> */}
			{msgData.list.length > 0 && (
				<Messages messages={msgData.list} msgDispatch={msgDispatch} />
			)}
			<div id="page-bottom-boundary" ref={viewportBottomRef}></div>
		</div>
	);
}
