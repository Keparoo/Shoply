import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductDetails.css';

// Display the details of a product and button to add to cart
// Routed at /products/:id

const ProductDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const { image_url, name, price, description } = useSelector((store) => ({
		...store.products[id]
	}));

	const add = (id, price) => {
		dispatch(addToCart(id, price));
	};

	return (
		<div className="row justify-content-center">
			<div className="col-md-4">
				<img
					className="ProductDetails-img card-img-top"
					src={image_url}
					alt={name}
				/>
				<div className="card-body">
					<div className="d-flex justify-content-between">
						<h4>{name}</h4>
						<h5>${price}</h5>
					</div>
					<p className="text-center">{description}</p>
					<button className="btn btn-info" onClick={() => add(id, price)}>
						Add to Cart
					</button>
					<p />
					<Link to="/" className="btn btn-block btn-info btn-lg">
						Back
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
