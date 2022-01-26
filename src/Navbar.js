import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import './Navbar.css';

/* Navigation bar for site
    Rendered on every page
    Rendered by App
*/

const Navbar = () => {
	const { totalItems, cartTotal } = useSelector((store) => store, shallowEqual);
	return (
		<nav className="Navbar navbar navbar-expand-md">
			<Link className="navbar-brand" to="/">
				Shoply
			</Link>
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mr-4">
					<Link className="nav-link" to="/cart">
						Cart
					</Link>
				</li>
				<li className="nav-item mr-4 mt-2 cart">
					Num Items: <span className="cart-num">{totalItems}</span>
				</li>
				<li className="nav-item mr-4 mt-2 cart">
					Cart Total: <span className="cart-num">${cartTotal}</span>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
