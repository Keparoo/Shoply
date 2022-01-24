import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';

const Cart = () => {
	const items = useSelector((store) => store.cart.items);
	const products = useSelector((store) => store.products);
	console.log(items);

	const itemsList = Object.keys(items).map((i) => (
		<tr key={i}>
			<td className="text-center align-middle">{products[i].name}</td>
			<td className="text-center align-middle">${products[i].price}</td>
			<td className="text-center align-middle">{items[i]}</td>
		</tr>
	));

	return (
		<div>
			<h1>Cart</h1>
			<table className="table table-bordered table-striped">
				<thead>
					<tr>
						<th>Item Name</th>
						<th>Item Price</th>
						<th>Item Quantity</th>
					</tr>
				</thead>
				{itemsList}
			</table>
		</div>
	);
};

export default Cart;
