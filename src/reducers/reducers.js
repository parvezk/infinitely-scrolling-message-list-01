export const pageReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_TOKEN':
			return { ...state, pageToken: action.pageToken };
		case 'ADVANCED_PAGE':
			return { ...state, page: state.page + 1 };
		default:
			return state;
	}
};

export const msgReducer = (state, action) => {
	switch (action.type) {
		case 'LOAD_MSGS':
			return { ...state, list: state.list.concat(action.messages) };
		case 'FETCH_MSGS':
			return { ...state, fetching: action.fetching };
		case 'DELETE_MSG':
			console.log('delete', action);
			return { ...state, list: state.list.filter((msg) => msg.id !== action.id) };
		default:
			return state;
	}
};
