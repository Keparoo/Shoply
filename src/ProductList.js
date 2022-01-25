import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from './actions';
import './ProductList.css';

function ProductList() {
	const products = useSelector((store) => store.products);
	const dispatch = useDispatch();

	const add = (id, price) => {
		dispatch(addToCart(id, price));
	};

	const productList = Object.keys(products).map((id) => (
		<div className="col-md-3 mb-3" key={id}>
			<div className="card">
				<div className="card-body">
					<h4 className="card-title text-center">
						<Link to={`/products/${id}`}>{products[id].name}</Link>
					</h4>
					<p>${products[id].price}</p>
					<button
						className="btn btn-sm btn-primary"
						onClick={() => add(id, products[id].price)}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	));
	return (
		<div>
			<h1>Shoply</h1>
			<p>Welcome to the Shoply online store.</p>
			<div className="row">{productList}</div>
		</div>
	);
}

export default ProductList;
