import styled from 'styled-components';

export const PageContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	margin: auto;
	@media(max-width: 600px) {
		width: 85%;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 0;
	}
`;
export const PageTitle = styled.h1`
	font-size: 27px;
	font-weight: normal;
	margin-bottom: 12px;
	text-align: center;
`;
export const ErrorMessage = styled.div`
	margin:10px 0;
	background-color:#ffcaca;
	color:#000;
	border:2px solid #ff0000;
	padding:10px;
`;
export const FakeLoading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.4rem;
	color: #f00;
	background-color: #ddd;
	width: 100%;
	height: 300px;
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