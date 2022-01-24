import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';

const Cart = () => {
	const items = useSelector((store) => store.cart.items);
	const products = useSelector((store) => store.products);
	const total = useSelector((store) => store.cart.total);

	const itemsList = Object.keys(items).map((i) => (
		<tr key={i}>
			<td className="text-center align-middle">{products[i].name}</td>
			<td className="text-center align-middle">${products[i].price}</td>
			<td className="text-center align-middle">{items[i]}</td>
			<td className="text-center align-middle">
				{items[i] * products[i].price}
			</td>
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
						<th>Sub-Total</th>
					</tr>
				</thead>
				<tbody>
					{itemsList}
					<tr className="text-center align-center">
						<td />
						<td />
						<td className="text-right">
							<strong>Total</strong>
						</td>
						<td>
							<strong>${total}</strong>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Cart;
