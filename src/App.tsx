import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Example/Login';
import Register from './Example/Register';
import Profile from './Example/Profile';
import DSTV from './Example/DSTV';

import Example from './Example/index';

function App() {
	return (
		<div className='App' style={{ margin: 10 }}>
			<Router>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/profile'>
						<Profile />
					</Route>
					<Route path='/dstv'>
						<DSTV />
					</Route>
				</Switch>
				<Example />
			</Router>
		</div>
	);
}

export default App;
