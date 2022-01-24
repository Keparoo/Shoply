const INITIAL_STATE = { total: 0, items: [] };

export default function cart(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD':
			// if item in arra
			return {
				total: state.total + action.price,
				items: [ ...state.items, { [action.id]: 1 } ]
			};
		case 'DELETE':
			return state - 1;
		case 'RESET':
			return 0;
		default:
			return state;
	}
}
