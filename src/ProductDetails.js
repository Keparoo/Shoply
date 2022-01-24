import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import './ProductDetails.css';

const Product = ({ id, name, price, description, image }) => {
	const dispatch = useDispatch();

	const add = (id, price) => {
		dispatch(addToCart(id, price));
	};

	return (
		<div className="row justify-content-center">
			<div className="col-md-4">
				<img
					className="ProductDetails-img card-img-top"
					src={image}
					alt={name}
				/>
				<div className="card-body">
					<div className="d-flex justify-content-between">
						<h4>{name}</h4>
						<h5>${price}</h5>
					</div>
					<p className="text-center">{description}</p>
					<button className="btn btn-primary" onClick={() => add(id, price)}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
