import { ADD_TO_CART, RESET_CART } from '../actionTypes';
const INITIAL_STATE = { total: 0, items: {} };

export default function cart(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_TO_CART:
			const itemsCopy = { ...state.items };
			itemsCopy[action.id] = (itemsCopy[action.id] || 0) + 1;

			return {
				...state,
				total: state.total + action.price,
				items: itemsCopy
			};
		case 'DELETE':
			return state - 1;
		case RESET_CART:
			return (state = INITIAL_STATE);
		default:
			return state;
	}
}
