import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import { App } from './App';
import { Login } from './Components/LogIn/login';

const Routers = () => (
	
			<BrowserRouter basename="/eventing">
				<div>
					<Route exact path="/" component={Login}/>
					<Route exact path="/App" component={App}/>
				
				</div>
			</BrowserRouter>
	
);

export {Routers};