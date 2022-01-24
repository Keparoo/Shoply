import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import Cart from './Cart';
import './App.css';

function App() {
	const products = useSelector((store) => store.products);
	// const dispatch = useDispatch();

	const productList = Object.keys(products).map((p) => (
		<Product
			key={p}
			id={p}
			name={products[p].name}
			price={products[p].price}
			description={products[p].description}
			image={products[p].image_url}
		/>
	));
	console.log(productList);
	return (
		<div className="App">
			<h1>Shoply</h1>
			<div className="container row">{productList}</div>
			<Cart />
		</div>
	);
}

export default App;
