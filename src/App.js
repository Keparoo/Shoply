import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './actions';
import Cart from './Cart';
import './App.css';

function App() {
	const products = useSelector((store) => store.products);
	const dispatch = useDispatch();

	const add = (id, price) => {
		dispatch(addToCart(id, price));
	};

	const productList = Object.keys(products).map((id) => (
		<div className="col-md-3 mb-3" key={id}>
			<div className="card">
				<div className="card-body">
					<h4 className="card-title text-center">{products[id].name}</h4>
					<p>${products[id].price}</p>
					<button
						className="btn btn-primary"
						onClick={() => add(id, products[id].price)}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	));

	return (
		<div className="App container">
			<h1>Shoply</h1>
			<div className="row">{productList}</div>
			<Cart />
		</div>
	);
}

export default App;
