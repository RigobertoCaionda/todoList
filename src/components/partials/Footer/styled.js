import styled from 'styled-components';

export const FooterArea = styled.footer`
	.first-footer {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
		background-color: #fff;
		border: 1px solid #ebebeb;
		font-size: 0.9rem;
		nav ul {
			display: flex;
			align-items: center;
			justify-content: center;
			li {
				margin-right: 30px;
				a {
					text-decoration: none;
					color: #777777;
					&: hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
	.second-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100px;
		font-size: 0.8rem;
		color: #333333;
	}
`;