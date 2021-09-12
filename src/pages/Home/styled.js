import styled from 'styled-components';
export const HomeArea = styled.div`
	
`;
export const SearchInput = styled.input`
	width: 100%;
	outline: 0;
	padding: 8px;
	font-size: 1rem;
	border-radius: 5px;
	border: 1px solid #dedede;
	transition: all ease 0.3s;
	margin-bottom: 50px;
	&: focus {
		border-color: #85b7d9;
	}
`;
export const Alarme = styled.audio``;
export const AlarmMessage = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: green;
	margin-bottom: 30px;
	padding: 15px 20px;
	border-radius: 5px;
	color: #fff;
`;
export const Message = styled.div`
	font-size: 1.6rem;
	@media (max-width: 600px) {
		& {
			font-size: 1.3rem;
		}
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		& {
			font-size: 1.3rem;
		}
	}
`;
export const XButton = styled.div`
	background-color: red;
	padding: 10px 20px;
	border-radius: 3px;
	font-weight: bold;
	cursor: pointer;
	&: hover {
		opacity: 0.8;
	}
`;