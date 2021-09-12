import {HeaderArea, Logo} from './styled';
import {PageContainer} from '../../AppStyled';
const Page = () => {
	return (
			<HeaderArea>
				<PageContainer>
					<Logo>
						<i>My Todo List</i>
					</Logo>
				</PageContainer>
			</HeaderArea>
		);
}
export default Page;