import styled from 'styled-components';

export const SignInArea = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 20px 0;
	.signUp {
		margin-top: 40px;
	}
	form {
		background-color: #fff;
		padding: 30px 20px 20px 20px;
		box-shadow: 0px 0px 3px #ddd;
		width: 100%;
		max-width: 600px;
		border-radius: 2px;
		
		.title--area {
			font-size: 0.9rem;
			font-weight: bold;
		}
		.title--area.radio--control {
			display: flex;
			align-items: center;
			height: 50px;
			input {
				margin-right: 5px;
				margin-left: 5px;
				cursor: pointer;
			}

		}
		.input--area {
				margin: 5px 0 12px 0;
			input {
				width: 100%;
				outline: 0;
				padding: 8px;
				border: 1px solid #ccc;
				border-radius: 5px;
				font-size: 1rem;
				transition: all ease-in 0.3s;	
				&: focus {
					border: 1px solid #66afe9;
				}
			}
			button {
				width: 100%;
				padding: 12px;
				border-radius: 5px;
				outline: 0;
				border: 0;
				cursor: pointer;
				background-color: #69d0f3;
				color: #fff;
				font-size: 1.2rem;
				&: hover {
					color: #000;
				}
			}
			
		}
	}
`;