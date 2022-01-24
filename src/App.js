import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import './App.css';

function App() {
	const products = useSelector((store) => store.products);
	// const dispatch = useDispatch();

	// console.log(Object.keys(products));
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
			<header className="App-header">
				<h1>Shoply</h1>
			</header>
			{productList}
		</div>
	);
}

export default App;
