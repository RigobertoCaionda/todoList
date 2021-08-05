import React from 'react';
import {PageContainer, PageTitle} from '../../components/mainComponents';
import {SignInArea} from './styled';
const Page = () => {
	return(
			<PageContainer>
				<SignInArea>
					<form>
						<PageTitle>Log in to Tubidy</PageTitle>
						<label>
							<div className="title--area">Username</div>
							<div className="input--area">
								<input type="text" placeholder="username"/>
							</div>
						</label>

						<label>
							<div className="title--area">Password</div>
							<div className="input--area">
								<input type="password" placeholder="password"/>
							</div>
						</label>

						<label>
							<div className="title--area"></div>
							<div className="input--area">
								<button>LOGIN</button>
							</div>
						</label>
					</form>

					<form className="signUp">
						<PageTitle>Sign up to Tubidy</PageTitle>
						<label>
							<div className="title--area">Username</div>
							<div className="input--area">
								<input type="text" placeholder="username"/>
							</div>
						</label>

						<label>
							<div className="title--area">Password</div>
							<div className="input--area">
								<input type="password" placeholder="password"/>
							</div>
						</label>

						<label>
							<div className="title--area radio--control">
								Gender:
								<input type="radio" name="gender" value="male"/>Male
								<input type="radio" name="gender" value="female"/>Female
							</div>
						</label>

						<label>
							<div className="title--area radio--control">
								Age:
								<input type="radio" name="age" value="13-17"/>13-17
								<input type="radio" name="age" value="18-35"/>18-35
								<input type="radio" name="age" value="36"/> > 35
							</div>
						</label>

						<label>
							<div className="title--area"></div>
							<div className="input--area">
								<button>SIGNUP</button>
							</div>
						</label>
					</form>
				</SignInArea>
			</PageContainer>
		);
}

export default Page;