import {
	ADD_TO_CART,
	RESET_CART,
	DELETE_FROM_CART,
	APPLY_DISCOUNT
} from './actionTypes';

export function addToCart(id) {
	return {
		type: ADD_TO_CART,
		id
	};
}

export function resetCart() {
	return {
		type: RESET_CART
	};
}

export function deleteFromCart(id) {
	return {
		type: DELETE_FROM_CART,
		id
	};
}

export function applyDiscount(discount) {
	return {
		type: APPLY_DISCOUNT,
		discount
	};
}
