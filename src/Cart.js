import React from 'react';
import { deleteFromCart } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';

const Cart = () => {
	const dispatch = useDispatch();
	const items = useSelector((store) => store.cart.items);
	const products = useSelector((store) => store.products);
	const total = useSelector((store) => store.cart.total);

	const deleteItem = (id, price) => {
		console.log('delete');
		dispatch(deleteFromCart(id, price));
	};

	const itemsList = Object.keys(items).map((id) => (
		<tr key={id}>
			<td className="text-center align-middle">{products[id].name}</td>
			<td className="text-center align-middle">${products[id].price}</td>
			<td className="text-center align-middle">{items[id]}</td>
			<td className="text-center align-middle">
				{items[id] * products[id].price}
			</td>
			<i
				onClick={() => deleteItem(id, items[id].price)}
				className="fas fa-trash fa-2x text-danger"
			/>
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
						<th>Edit Cart</th>
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
