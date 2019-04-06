import React, { useReducer } from 'react';
import './App.css';

const App = () => {
	const initialState = '';
	const [ secret, setSecret ] = useReducer(reducer, initialState);

	return (
		<div className="App">
			<div className="element">
				Tell me your darkest secret!
				<br />
				<input type="text" value={secret} onChange={(e) => setSecret(e.target.value)} />
				<br />
				<h2>
					Shhh, don't tell anyone but...<br />
					"{secret}"
				</h2>
			</div>
		</div>
	);
};

const reducer = (state, action) => {
	return action;
};

export default App;
