import styled from 'styled-components';
export const PageContainer = styled.div`
	width: 1000px;
	margin: auto;
	@media (max-width: 600px) {
		& {
			width: 100%;
			padding: 0 30px;
		}
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		& {
			width: 100%;
			padding: 0 30px;
		}
	}
`;
export const ErrorMessage = styled.div`
	background-color:#ffcaca;
	margin-bottom: 10px;
	padding: 10px;
	color: #000;
	border:2px solid #ff0000;
`;