import data from '../data.json';

import {
	ADD_TO_CART,
	RESET_CART,
	DELETE_FROM_CART,
	APPLY_DISCOUNT
} from '../actionTypes';

const INITIAL_STATE = {
	products: data.products,
	cartTotal: 0.0,
	items: {},
	totalItems: 0,
	discountApplied: false,
	discountRate: 0,
	discountAmount: 0
};

const validDiscounts = {
	REMOVE10: 0.1,
	REMOVE20: 0.2,
	REMOVE30: 0.3
};

const calculateCart = (products, cart, discountRate) => {
	let total = 0;
	for (let id in products) {
		const { price } = products[id];
		const quantity = cart[id] || 0;
		total += price * quantity;
	}
	let totalWithDiscount = (total * (1 - discountRate)).toFixed(2);
	let discountAmount = total - totalWithDiscount;
	return { totalWithDiscount, discountAmount };
};

export default function cart(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			const itemsCopy = { ...state.items };
			itemsCopy[action.id] = (itemsCopy[action.id] || 0) + 1;
			const { totalWithDiscount, discountAmount } = calculateCart(
				state.products,
				itemsCopy,
				state.discountRate
			);

			return {
				...state,
				totalItems: state.totalItems + 1,
				cartTotal: totalWithDiscount,
				discountAmount: discountAmount,
				items: itemsCopy
			};
		}

		case DELETE_FROM_CART: {
			const itemsCopy = { ...state.items };
			itemsCopy[action.id] = itemsCopy[action.id] - 1;
			if (itemsCopy[action.id] === 0) delete itemsCopy[action.id];
			const { totalWithDiscount, discountAmount } = calculateCart(
				state.products,
				itemsCopy,
				state.discountRate
			);

			return {
				...state,
				totalItems: state.totalItems - 1,
				cartTotal: totalWithDiscount,
				discountAmount: discountAmount,
				items: itemsCopy
			};
		}

		case RESET_CART:
			return (state = INITIAL_STATE);

		case APPLY_DISCOUNT: {
			if (!state.discountApplied && validDiscounts[action.discount]) {
				const discountRate = validDiscounts[action.discount];
				const { totalWithDiscount, discountAmount } = calculateCart(
					state.products,
					state.items,
					discountRate
				);
				return {
					...state,
					discountApplied: true,
					discountRate: discountRate,
					discountAmount: discountAmount,
					cartTotal: totalWithDiscount
				};
			} else {
				return state;
			}
		}

		default:
			return state;
	}
}
