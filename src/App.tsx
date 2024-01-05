import React from 'react';
import './App.css';
import {createStore} from "redux";
import {useDispatch, useSelector} from "react-redux";

function App() {

	const dispatch = useDispatch()
	const state = useSelector(state => state)

	return (

		<div className="App">

		</div>
	);
}

export default App;
