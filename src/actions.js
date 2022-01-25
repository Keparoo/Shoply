import { ADD_TO_CART, RESET_CART, DELETE_FROM_CART } from './actionTypes';

export function addToCart(id, price) {
	return {
		type: ADD_TO_CART,
		id,
		price
	};
}

export function resetCart() {
	return {
		type: RESET_CART
	};
}

export function deleteFromCart(id, price) {
	return {
		type: DELETE_FROM_CART,
		id,
		price
	};
}
