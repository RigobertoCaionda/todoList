import styled from 'styled-components';

export const Video = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	padding: 5px 20px 5px 5px;
	border-radius: 3px;
	background-color: #fff;
	width: 100%;
	max-width: 800px;
	display: flex;
	cursor: pointer;
	align-items: center;
	&: hover {
		background-color: #ccc;
	}
	a{
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #000;
	}
	.video-image {
		width: 180px;
		height: 150px;
		margin-right: 10px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.video-title {
		font-weight: bold;
	}
`;