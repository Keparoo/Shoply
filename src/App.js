import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from './actions';
import Navbar from './Navbar';
import Routes from './Routes';
import Cart from './Cart';
import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<Routes />
			</div>
		</div>
	);
}

export default App;
