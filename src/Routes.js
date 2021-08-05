import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
const Page = () => {
	return(
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

					<Route exact path="/login">
						<Login />
					</Route>

				<Route>
					<NotFound />
				</Route>
			</Switch>
		);
}
export default Page;