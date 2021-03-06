import React from 'react';
import { deleteFromCart, addToCart } from './actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { resetCart } from './actions';
import DiscountForm from './DiscountForm';
import './Cart.css';

// Display the contents of the shopping cart
// Routed at /cart

const Cart = () => {
	const dispatch = useDispatch();
	const {
		products,
		items,
		cartTotal,
		discountAmount,
		totalItems
	} = useSelector((store) => store, shallowEqual);

	const deleteItem = (id) => {
		dispatch(deleteFromCart(id));
	};

	const addItem = (id) => {
		dispatch(addToCart(id));
	};

	const clearCart = () => {
		dispatch(resetCart());
	};

	// Generate table cells of purchases in cart with buttons to add or subtract items from cart
	const itemsList = Object.keys(items).map((id) => (
		<tr key={id}>
			<td className="text-center align-middle">{products[id].name}</td>
			<td className="text-center align-middle">${products[id].price}</td>
			<td className="text-center align-middle">{items[id]}</td>
			<td className="text-center align-middle">
				<i
					onClick={() => deleteItem(id)}
					className="fas fa-trash text-danger mt-2 Cart-icon"
				/>
				<i
					onClick={() => addItem(id)}
					className="fas fa-plus text-danger ml-4 Cart-icon"
				/>
			</td>

			<td className="text-center align-middle">
				${Math.round(items[id] * products[id].price * 100) / 100}
			</td>
		</tr>
	));

	// If cart not empty, display table of cart items
	return totalItems === 0 ? (
		<div className="jumbotron">
			<h3 className="display-4">No items in cart. Keep shopping!</h3>
		</div>
	) : (
		<div className="jumbotron">
			<h1 className="display-4">Cart</h1>
			<hr className="my-4" />
			<table className="table table-bordered table-striped my-4">
				<thead>
					<tr>
						<th>Item Name</th>
						<th>Item Price</th>
						<th>Quantity</th>
						<th>Adjust Cart</th>
						<th>Sub-Total</th>
					</tr>
				</thead>
				<tbody>
					{itemsList}
					<tr className="text-center align-center">
						<td />
						<td />
						<td />
						<td className="text-right">
							<strong>Discount</strong>
						</td>
						<td>
							<strong>${discountAmount.toFixed(2) || 0}</strong>
						</td>
					</tr>
					<tr className="text-center align-center">
						<td />
						<td />
						<td />
						<td className="text-right">
							<strong>Total</strong>
						</td>
						<td>
							<strong>${cartTotal}</strong>
						</td>
					</tr>
				</tbody>
			</table>
			<div className="row">
				<div className="col-6">
					<button onClick={clearCart} className="btn btn-info">
						Clear Cart
					</button>
				</div>
				<div className="col-6">
					<DiscountForm />
				</div>
			</div>
		</div>
	);
};

export default Cart;
