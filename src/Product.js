import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import './Product.css';

const Product = ({ id, name, price, description, image }) => {
	const dispatch = useDispatch();

	const add = (id, price) => {
		dispatch(addToCart(id, price));
	};

	return (
		<div>
			<h4>{name}</h4>
			<img src={image} alt={name} />
			<h5>{price}</h5>
			<p>{description}</p>
			<button onClick={() => add(id, price)}>Add to Cart</button>
		</div>
	);
};

export default Product;
