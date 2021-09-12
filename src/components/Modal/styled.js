import styled from 'styled-components';
export const ModalArea = styled.div`
	display: ${props=>props.status ? 'flex' : 'none'};
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, .7);
`;
export const Modal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-width: 500px;
	max-width: 80vw;
	max-height: 95vh;
	min-height: 150px;
	padding: 15px;
	background-color: #fff;
	border-radius: 5px;
	overflow: auto;
	@media (max-width: 600px) {
		& {
			min-width: 300px;
			padding: 8;
		}
	}
`;
export const ModalInfoArea = styled.div`
	
`;
export const ModalButtonsArea = styled.div`
	
`;
export const TitleArea = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
	@media (max-width: 600px) {
		& {
			font-size: 0.8rem;
		}
	}
`;
export const TitleTag = styled.div`
	margin-right: 20px;
	@media (max-width: 600px) {
		margin-right: 12px;
	}
`;
export const Title = styled.div``;
export const TimeCreated = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	@media (max-width: 600px) {
		& {
			font-size: 0.8rem;
		}
	}
`;
export const TimeTitle = styled.div``;
export const TimeDesc = styled.div``;
export const ModalButton = styled.button`
	outline: 0;
	background-color: transparent;
	cursor: pointer;
	color: #f00;
	padding: 5px 10px;
	border: 1px solid #ccc;
	&: hover {
		border-color: #aaa;
	}
`;
export const StatusArea = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
`;
export const StatusTitle = styled.div`
	color: ${props=>props.statusColor ? 'green' : 'red'};
`;
export const ScheduledTimeArea = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
`;
export const ScheduledTitle = styled.div``;
export const ScheduledDesc = styled.div`
	color: ${props=>props.schColor ? '#f00' : '#000'};
`;
export const ScheduledInputArea = styled.div`
	margin-bottom: 30px;
`;
export const ScheduledInput = styled.div`
	display: flex;
	align-items: center;
	@media (max-width: 600px) {
		& {
			flex-direction: column;
			align-items: flex-start;
		}
	}
`;
export const Input = styled.input`
	width: 50%;
	margin-right: 20px;
	outline: 0;
	border: 1px solid #dedede;
	border-radius: 5px;
	padding: 5px;
	transition: all ease 0.3s;
	&: last-child {
		margin-right: 0;
	}
	&: focus {
		border-color: #85b7d9;
	}
	@media (max-width: 600px) {
		& {
			width: 100%;
			margin-right: 0;
			margin-bottom: 10px;
			font-size: 1rem;
		}
	}
`;
export const ScheduledButtonArea = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;
`;
export const ScheduledButton = styled.button`
	border: 1px solid #ccc;
	outline: 0;
	background-color: green;
	padding: 5px 100px;
	cursor: pointer;
	color: #fff; 
	border-radius: 3px;
	&: hover {
		opacity: 0.8;
	}
	@media (max-width: 600px) {
		& {
			width: 100%;
			padding: 5px 0;
		}
	}
`;