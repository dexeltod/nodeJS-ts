import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

interface InitialState {
	count: number;
}

interface IAction {
	type: string
	payload?: any
}

const initialState: InitialState = {
	count: 0,
}

const reducer = (state: InitialState = initialState, action: IAction) => {
	switch (action.type) {
		case "ADD":
			return state.count += action.payload
		case "DECREASE":
			return state.count -= action.payload
		case "SET":
			return state.count = action.payload
	}
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>

	</React.StrictMode>
);

