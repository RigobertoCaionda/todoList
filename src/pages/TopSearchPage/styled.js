import styled from 'styled-components';

export const TopSearchArea = styled.div`
	width: 100%;
	margin: 90px 0 30px 0;
`;
export const TopSearchItem = styled.div`
	max-width: 800px;
	margin-bottom: 10px;
	&: hover {
		.searched-item {
			background-color: #f8fcfe;
		}
	}
	a {
			text-decoration: none;
			color: #000;
		}
	.searched-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 17px;
		background-color: #fff;
		box-shadow: 0px 0px 3px #ddd;
		border-radius: 2px;
		font-size: 0.9rem;
		cursor: pointer;
		#right-arrow {
			font-size: 1.6rem;
			color: #ccc;
		}
	}
`;