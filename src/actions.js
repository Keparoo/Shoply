import { ADD_TO_CART } from './actionTypes';

export function addToCart(id) {
	return {
		type: ADD_TO_CART,
		id
	};
}
