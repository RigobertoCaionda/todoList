import styled from 'styled-components';
export const TaskArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	min-height: 70px;
	border-radius: 5px;
	border-top: 1px solid #85b7d9;
	border-left: 1px solid #85b7d9;
	border-right: 1px solid #85b7d9;
	border-bottom: 3px solid ${props=>props.done ? 'green' : '#eaae00'};
	margin-bottom: 30px;
	background-color: ${props=>props.done ? '#ccc' : ''};
	@media (max-width: 600px) {
		& {
			padding: 10px;
		}
	}
`;
export const TaskName = styled.div`
	flex: 1;
	margin-right: 40px;
	@media (max-width: 600px) {
		margin-right: 25px;
	}
`;
export const TaskOptions = styled.div`
	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
	}
`;
export const TaskButton = styled.button`
	margin-right: 15px;
	font-size: 1rem;
	border: 0;
	outline: 0;
	background-color: transparent;
	cursor: pointer;
	&: hover {
		color: #eaae00;
	}
	@media (max-width: 600px) {
		& {
			margin-bottom: 10px;
		}
	}
`;