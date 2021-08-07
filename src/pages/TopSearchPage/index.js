import React from 'react';
import {PageContainer} from '../../components/mainComponents';
import {TopSearchItem, TopSearchArea} from './styled';
import {Link} from 'react-router-dom';
const Page = () => {
	return(
			<PageContainer>
				<TopSearchArea>
						<TopSearchItem>
							<Link to="/top_searches/gerilson_insrael">
								<div className="searched-item">
									<span>gerilson insrael</span>
									<i className="fas fa-angle-right" id="right-arrow"></i>
								</div>
								</Link>
						</TopSearchItem>

						<TopSearchItem>
							<Link to="/top_searches/rui_orlando">
								<div className="searched-item">
									<span>rui orlando</span>
									<i className="fas fa-angle-right" id="right-arrow"></i>
								</div>
								</Link>
						</TopSearchItem>

						<TopSearchItem>
							<Link to="/top_searches/gerilson">
								<div className="searched-item">
									<span>gerilson</span>
									<i className="fas fa-angle-right" id="right-arrow"></i>
								</div>
								</Link>
						</TopSearchItem>

						<TopSearchItem>
							<Link to="/top_searches/young_family">
								<div className="searched-item">
									<span>young family</span>
									<i className="fas fa-angle-right" id="right-arrow"></i>
								</div>
								</Link>
						</TopSearchItem>

						<TopSearchItem>
							<Link to="/top_searches/c4pedro">
								<div className="searched-item">
									<span>c4pedro</span>
									<i className="fas fa-angle-right" id="right-arrow"></i>
								</div>
								</Link>
						</TopSearchItem>

						<TopSearchItem>
							<Link to="/top_searches/edgar_domingos">
								<div className="searched-item">
									<span>edgar domingos</span>
									<i className="fas fa-angle-right" id="right-arrow"></i>
								</div>
								</Link>
						</TopSearchItem>

						<TopSearchItem>
							<Link to="/top_searches/justin_bieber">
								<div className="searched-item">
									<span>justin bieber</span>
									<i className="fas fa-angle-right" id="right-arrow"></i>
								</div>
								</Link>
						</TopSearchItem>

						<TopSearchItem>
							<Link to="/top_searches/paulelson">
								<div className="searched-item">
									<span>paulelson</span>
									<i className="fas fa-angle-right" id="right-arrow"></i>
								</div>
								</Link>
						</TopSearchItem>

						<TopSearchItem>
							<Link to="/top_searches/trxmusic">
								<div className="searched-item">
									<span>trxmusic</span>
									<i className="fas fa-angle-right" id="right-arrow"></i>
								</div>
								</Link>
						</TopSearchItem>

						<TopSearchItem>
							<Link to="/top_searches/landrick">
								<div className="searched-item">
									<span>landrick</span>
									<i className="fas fa-angle-right" id="right-arrow"></i>
								</div>
								</Link>
						</TopSearchItem>
						</TopSearchArea>
			</PageContainer>
		);
}
export default Page;