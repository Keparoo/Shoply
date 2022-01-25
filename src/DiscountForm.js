import React, { useState } from 'react';
import { applyDiscount } from './actions';
import './DiscountForm.css';
import { useDispatch } from 'react-redux';

const DiscountForm = () => {
	const [ discount, setDiscount ] = useState('');
	const dispatch = useDispatch();

	function handleChange(evt) {
		setDiscount(evt.target.value);
	}

	function handleDiscount(evt) {
		evt.preventDefault();
		dispatch(applyDiscount(discount));
		setDiscount('');
	}

	return (
		<div className="align-items-center">
			<form onSubmit={handleDiscount} className="form-inline align-items-right">
				<label htmlFor="discount">Discount:</label>
				<input
					id="discount"
					name="discount"
					className="form-control ml-2 mr-2"
					value={discount}
					onChange={handleChange}
				/>
				<button className="btn btn-info">Apply Discount Code</button>
			</form>
		</div>
	);
};

export default DiscountForm;
