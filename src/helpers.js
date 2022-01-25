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

export { calculateCart };
