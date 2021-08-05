import React, {useState} from 'react';
import {PageContainer, PageTitle, ErrorMessage} from '../../components/mainComponents';
import {SignInArea} from './styled';
import useAPI from '../../helpers/myAPI';
import {doLogin} from '../../helpers/AuthHandler';
const Page = () => {
	const api = useAPI();
			const [userNameSI, setUserNameSI] = useState('');
			const [passwordSI, setPasswordSI] = useState('');
			const [userNameSU, setUserNameSU] = useState('');
			const [passwordSU, setPasswordSU] = useState('');
			const [disabledSI, setDisabledSI] = useState(false);
			const [disabledSU, setDisabledSU] = useState(false);
			const [confirmPassword, setConfirmPassword] = useState('');
			const [errorSI, setErrorSI] = useState('');
			const [errorSU, setErrorSU] = useState('');
			const handleSubmitSI = async (e) => {
				e.preventDefault();
				setDisabledSI(true);
				setErrorSI('');
				const json = await api.login(userNameSI, passwordSI);
				if (json.message && json.token) {
					doLogin(json.token);
					window.location.href = '/';
					//console.log("O token e" +JSON.stringify(json));
				}else {
					setErrorSI(json.message);
				}
				setDisabledSI(false);
			}
			const handleSubmitSU = async (e) => {
					e.preventDefault();
					setDisabledSU(true);
					setErrorSU('');
					if (passwordSU !== confirmPassword) {
						setErrorSU('As senhas não batem!');
						setDisabledSU(false);
						return;
					}
					const json = await api.register(userNameSU, passwordSU, confirmPassword);
					if (json.message) {
						setErrorSU(json.message);
					}
					setDisabledSU(false);
			}
	return(
			<PageContainer>
				<SignInArea>
					<form onSubmit={handleSubmitSI}>
						<PageTitle>Log in to Tubidy</PageTitle>
						{errorSI &&
							<ErrorMessage>{errorSI}</ErrorMessage>
						}
						<label>
							<div className="title--area">Username</div>
							<div className="input--area">
								<input type="text" placeholder="username" value={userNameSI} 
								onChange={e=>setUserNameSI(e.target.value)} disabled={disabledSI}/>
							</div>
						</label>

						<label>
							<div className="title--area">Password</div>
							<div className="input--area">
								<input type="password" placeholder="password" value={passwordSI}
								onChange={(e)=>setPasswordSI(e.target.value)} disabled={disabledSI}/>
							</div>
						</label>

						<label>
							<div className="title--area"></div>
							<div className="input--area">
								<button disabled={disabledSI}>LOGIN</button>
							</div>
						</label>
					</form>

					<form className="signUp" onSubmit={handleSubmitSU}>
						<PageTitle>Sign up to Tubidy</PageTitle>
						{errorSU &&
							<ErrorMessage>{errorSU}</ErrorMessage>
						}
						<label>
							<div className="title--area">Username</div>
							<div className="input--area">
								<input type="text" placeholder="username" value={userNameSU}
								onChange={e=>setUserNameSU(e.target.value)} disabled={disabledSU}/>
							</div>
						</label>

						<label>
							<div className="title--area">Password</div>
							<div className="input--area">
								<input type="password" placeholder="password" value={passwordSU}
								onChange={e=>setPasswordSU(e.target.value)} disabled={disabledSU}/>
							</div>
						</label>

						<label>
							<div className="title--area">Confirm Password</div>
							<div className="input--area">
								<input type="password" placeholder="confirm password" value={confirmPassword}
								onChange={e=>setConfirmPassword(e.target.value)} disabled={disabledSU}/>
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
								<button disabled={disabledSU}>SIGNUP</button>
							</div>
						</label>
					</form>
				</SignInArea>
			</PageContainer>
		);
}

export default Page;