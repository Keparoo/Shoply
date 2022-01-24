import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './actions';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import './App.css';

function App() {
	const products = useSelector((store) => store.products);
	const dispatch = useDispatch();

	//   <Product
	//   key={p}
	//   id={p}
	//   name={products[p].name}
	//   price={products[p].price}
	//   description={products[p].description}
	//   image={products[p].image_url}
	// />

	const add = (id, price) => {
		dispatch(addToCart(id, price));
	};

	const productList = Object.keys(products).map((p) => (
		<div className="col-md-3 mb-3" key={p}>
			<div className="card">
				<div className="card-body">
					<h4 className="card-title text-center">{products[p].name}</h4>
					<p>${products[p].price}</p>
					<button
						className="btn btn-primary"
						onClick={() => add(p, [ p ].price)}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	));
	console.log(productList);
	return (
		<div className="App container">
			<h1>Shoply</h1>
			<div className="row">{productList}</div>
			<Cart />
		</div>
	);
}

export default App;
