import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import { App } from './App';
import { Registers } from './Components/Register/register';
import { Login } from './Components/LogIn/login';

const Routers = () => (
	
			<BrowserRouter basename="/eventing">
				<div>
					<Route exact path="/" component={Registers}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/App" component={App}/>
				</div>
			</BrowserRouter>
	
);

export {Routers};