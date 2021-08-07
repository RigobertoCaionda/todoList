import React, {useState} from 'react';
import {HeaderArea} from './styled';
import {PageContainer} from '../../mainComponents';
import logo from '../../../images/logo.svg';
import {Link} from 'react-router-dom';
import {isLogged, doLogout} from '../../../helpers/AuthHandler';
const Page = () => {
	let logged = isLogged();
	
	const [hideAccOpt, setHideAccOpt] = useState(true);
	const [hideLangOpt, setHideLangOpt] = useState(true);

	document.addEventListener('click', (e)=>{
		let isValid = e.target.classList.contains('button') || e.target.classList.contains('fa-caret-down');
		if (!isValid) {
			setHideAccOpt(true);
			setHideLangOpt(true);
		}
	});
	const handleLangOpt = () => {
		if (!hideAccOpt) {
			setHideAccOpt(true);
		}
		setHideLangOpt(!hideLangOpt);
	}
	const handleMyAccountClick = () => {
			if (!hideLangOpt) {
				setHideLangOpt(true);
			}
			setHideAccOpt(!hideAccOpt);
	}
	const handleLogout = () => {
		doLogout();
		window.location.href = '/';
	}
	const handleLangClick = () => {
		alert('Funcionalidade indisponível no momento!');
	}

	return (
			<HeaderArea>
				<PageContainer>
					<Link to="/">
						<div className="logoArea">
							<img src={logo} alt=""/>
						</div>
					</Link>
					<div className="menuArea">
						<nav>
							<ul>
								<li><Link to="/top_videos">Top Videos</Link></li>
								<li><Link to="/top_searches">Top Searches</Link></li>
								{logged &&
									<li><Link to="/recently_viewed">My Recently Viewed</Link></li>
								}
								<li>
									<form method="GET" action="/make_search">
										<input type="text" placeholder="Search" name="q"/>
										<button type="submit"><i className="fas fa-search"></i></button>
									</form>
								</li>
								<li>
									<button className="button" onClick={handleMyAccountClick}>
										My Account
										<i className="fas fa-caret-down"></i>
									</button>
									{!hideAccOpt &&
										<div className="myAccountOptions">
											{logged &&
												<button onClick={handleLogout}>Logout</button>
											}
											{!logged &&
												<Link to="/login">Login</Link>
											}
											<Link to="/my_playlists">My Playlists</Link>
											<Link to="/my_stats">My Stats</Link>
											<Link to="/upload">Upload</Link>
										</div>
									}
								</li>
								<li>
									<button className="button" onClick={handleLangOpt}>
										EN
										<i className="fas fa-caret-down"></i>
									</button>
									{!hideLangOpt &&
										<div className="langOptions">
											<button onClick={handleLangClick}>ENGLISH</button>
											<button onClick={handleLangClick}>PORTUGUESE</button>
										</div>
									}
								</li>
							</ul>
						</nav>
					</div>
				</PageContainer>
			</HeaderArea>
		);
}
export default Page;