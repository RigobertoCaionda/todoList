import Cookies from 'js-cookie';

export const doLogin = (token) => {
	Cookies.set('token', token);
}
export const doLogout = () => {
	Cookies.remove('token');
}
export const isLogged = ()=> {
	let token = Cookies.get('token');
	return (token) ? true : false; 
}