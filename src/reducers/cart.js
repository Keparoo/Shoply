import { ADD_TO_CART, RESET_CART, DELETE_FROM_CART } from '../actionTypes';
const INITIAL_STATE = { total: 0, totalItems: 0, items: {} };

export default function cart(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_TO_CART:
			const itemsCopy = { ...state.items };
			itemsCopy[action.id] = (itemsCopy[action.id] || 0) + 1;

			return {
				...state,
				totalItems: state.totalItems + 1,
				total: Math.round((state.total + action.price) * 100) / 100,
				items: itemsCopy
			};

		case DELETE_FROM_CART:
			const delItemsCopy = { ...state.items };
			delItemsCopy[action.id] = delItemsCopy[action.id] - 1;
			if (delItemsCopy[action.id] === 0) delete delItemsCopy[action.id];

			return {
				...state,
				totalItems: state.totalItems - 1,
				total: Math.round((state.total - action.price) * 100) / 100,
				items: delItemsCopy
			};

		case RESET_CART:
			return (state = INITIAL_STATE);

		default:
			return state;
	}
}
