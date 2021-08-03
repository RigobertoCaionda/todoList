import styled from 'styled-components';

export const HeaderArea = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #5097c1;
	min-height: 90px;
	.logoArea {
		width: 110px;
		img {
			width: 100%;
		}
	}
	.menuArea nav ul {
		display: flex;
		align-items: center;
		list-style: none;
		a {
			text-decoration: none;
			color: #fff;
		}
		li {
			margin-right: 25px;
			.langOptions {
				button {
					border: 0;
					outline: 0;
					background: none;
					cursor: pointer;
					padding: 5px 70px 5px 20px;
					color: #262626;
					&: hover {
						background-color: #efefef;
					}
				}
			}
			.myAccountOptions, .langOptions {
				position: absolute;
				display: flex;
				flex-direction: column;
				background-color: #fff;
				padding: 5px 0;
				margin-top: 15px;
				border-radius: 3px;
				a {
					color: #262626;
					font-size: 0.9rem;
					margin-bottom: 10px;
					padding: 5px 70px 5px 20px;
					&:hover {
						background-color: #efefef;
					}
				}
			}
			.button {
				background: none;
				border: 0;
				outline: 0;
				color: #fff;
				cursor: pointer;
				font-size: 1rem;
				i {
					margin-left: 7px;
					font-size: 0.9rem;
				}
			}
			form{
				input {
					outline: none;
					padding: 7px;
					border-radius: 5px;
					border: 0;
					background-color: #0d2e44;
					color: #fff;
					font-size: 1rem;
				}
				button {
					background: none;
					border: 0;
					outline: 0;
					margin-left: -25px;
					cursor: pointer;
					i {
						color: #dedede;
						font-size: 1rem;
						&:hover {
							color: #fff;
						}
					}
				}
			}
		}
		li: last-child {
			margin-right: 0;
		}
	}
`;