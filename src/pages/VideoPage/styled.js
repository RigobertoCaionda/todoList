import styled from 'styled-components';

export const Fake = styled.div`
	background-color: #ddd;
	width: 100%;
	height: ${props=>props.height || 20}px;
	transition: all ease-out 2s;
	animation-name: pisca;
	animation-duration: 2s;
	animation-iteration-count: infinite;
	@keyframes pisca {
		0% {
			opacity: 0.2;
		} 
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.2;
		}
	}
`;
export const VideoInfoArea = styled.div`
	width: 80%;
	border: 1px solid #999;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	.video-info {
		h2 {
			text-align: center;
		}
	}
`;