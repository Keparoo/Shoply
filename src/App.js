import React from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
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
