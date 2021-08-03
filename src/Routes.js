import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
const Page = () => {
	return(
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		);
}
export default Page;