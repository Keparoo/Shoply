import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from './actions';
import './ProductList.css';

// Display a list of products with limited product information
// Routed at /products

function ProductList() {
	const products = useSelector((store) => store.products, shallowEqual);
	const dispatch = useDispatch();

	const add = (id, price) => {
		dispatch(addToCart(id));
	};

	const productList = Object.keys(products).map((id) => (
		<div className="col-md-3 mb-4" key={id}>
			<div className="card">
				<div className="card-body">
					<h4 className="card-title text-center product">
						<Link to={`/products/${id}`}>{products[id].name}</Link>
					</h4>
					<p>${products[id].price}</p>
					<button className="btn btn-sm btn-info" onClick={() => add(id)}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	));
	return (
		<div className="jumbotron">
			<h1 className="display-4">Shoply</h1>
			<p className="lead">Welcome to the Shoply online store.</p>
			<hr className="my-4" />
			<p>
				Amazon is so yesterday. The real bargains and the best products are all
				here on Shoply.
			</p>
			<p className="lead">
				<Link className="btn btn-info btn-lg" to="/cart" role="button">
					Go to Cart
				</Link>
			</p>
			<div />

			<div className="row">{productList}</div>
		</div>
	);
}

export default ProductList;
