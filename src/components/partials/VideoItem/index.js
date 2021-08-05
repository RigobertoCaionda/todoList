import React from 'react';
import {Video} from './styled';
import {PageContainer} from '../../mainComponents';
import {Link} from 'react-router-dom';
const Page = (props) => {
	return(
			<PageContainer>
					<Video>
					<Link to={`/video/${props.data.id}`}>
						<div className="video-image">
							<img src={props.data.image} alt="" />
						</div>
						<div className="video-information">
							<div className="video-title">
								{props.data.title}
							</div>

							<div className="video-duration">
								Ano de lançamento: {props.data.year}
							</div>
						</div>
						</Link>
					</Video>
				</PageContainer>
		);
}
export default Page;