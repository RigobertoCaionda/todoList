import React from 'react';
import {FooterArea} from './styled';
import {Link} from 'react-router-dom';
const Page = () => {
	return(
			<FooterArea>
				<div className="first-footer">
					<nav>
						<ul>
							<li><Link to="/invite_friend">Invite a Friend</Link></li>
							<li><Link to="/help">Help/FAQ</Link></li>
							<li><Link to="/report_problem">Report a problem</Link></li>
							<li><Link to="/privacy_policy">Privacy Policy</Link></li>
							<li><Link to="/terms_of_use">Terms Of Use</Link></li>
						</ul>
					</nav>
				</div>

				<div className="second-footer">
					© 2021 tubidy.mobi
				</div>
			</FooterArea>
		);
}
export default Page;