import React from 'react';
import {Switch} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import VideoPage from './pages/VideoPage';
import TopSearchPage from './pages/TopSearchPage';
import RecentlyViewed from './pages/RecentlyViewed';
import RouteHandler from './components/RouteHandler';
const Page = () => {//Isso quer dizer que quando eu clicar num video chama a rota de video/o id (Referindo a rota /vido/:id)
	return(
			<Switch>
				<RouteHandler exact path="/">
					<Home />
				</RouteHandler>

					<RouteHandler exact path="/login">
						<Login />
					</RouteHandler>

					<RouteHandler exact path="/video/:id">
						<VideoPage />
					</RouteHandler>

					<RouteHandler exact path="/top_videos">
						<Home />
					</RouteHandler>

					<RouteHandler private exact path="/recently_viewed">
						<RecentlyViewed />
					</RouteHandler>

					<RouteHandler exact path="/top_searches">
						<TopSearchPage />
					</RouteHandler>

				<RouteHandler>
					<NotFound />
				</RouteHandler>
			</Switch>
		);
}
export default Page;