import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [ secret, setSecret ] = useState('');

	const handleTextboxValue = (e) => {
		setSecret(e.target.value);
	};

	return (
		<div className="App">
			<div className="element">
				Tell me your darkest secret!
				<br />
				<input type="text" value={secret} onChange={(e) => handleTextboxValue(e)} />
				<br />
				<h2>Shhh, don't tell anyone but {secret}</h2>
			</div>
		</div>
	);
};

export default App;
