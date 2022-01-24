import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import './App.css';

function App() {
	const products = useSelector((store) => store.products);
	// const dispatch = useDispatch();

	const productList = products.map((p) => (
		<Product
			key={p.id}
			id={p.id}
			name={p.name}
			price={p.price}
			description={p.description}
			image={p.image_url}
		/>
	));
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
