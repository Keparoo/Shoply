import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/* Navigation bar for site
    Rendered on every page
    Rendered by App\
*/

const Navbar = () => {
	return (
		<nav className="Navbar navbar navbar-expand-md">
			<Link className="navbar-brand" to="/">
				Shoply
			</Link>
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mr-4">
					<Link className="nav-link" to="/">
						Cart
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
