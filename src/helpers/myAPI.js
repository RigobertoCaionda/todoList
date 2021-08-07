import Cookies from 'js-cookie';//Pq vamos gravar o login no browser
import qs from 'qs';
const BASEAPI = 'https://tune-grabber-user-api.herokuapp.com';
const BASEAPI2 = 'https://imdb-api.com/en/API';

const apiFetchPost = async (endpoint, body) =>{
	if(!body.token){
		let token = Cookies.get('token');
		if(token){
			body.token = token;
		}
	}
	const res = await fetch(BASEAPI+endpoint, {
		method: 'POST',
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
	const json = await res.json();
	if(json.notallowed){
		window.location.href = '/login';
		return;
	}
	return json;
}

const apiFetchGet = async (endpoint, body = []) =>{
	if(!body.token){
		let token = Cookies.get('token');
		if(token){
			body.token = token;
		}
	}
	const res = await fetch(`${BASEAPI2+endpoint}?${qs.stringify(body)}`);
	const json = await res.json();
	if(json.notallowed){
		window.location.href = '/login';
		return;
	}
	return json;
}

const myAPI = {
	register: async (userName, password, password2)=> {
		const json = await apiFetchPost(
				'/api/register',
				{
					userName,
					password,
					password2
				}
			);
		return json;
	},
	login: async (userName, password) => {
		const json = await apiFetchPost(
				'/api/login',
				{
					userName,
					password
				}
			);
			return json;
	},
	getVideos: async () => {
		const json = await apiFetchGet(
			'/Top250TVs/k_uz1296mq'
			);
		return json.items;

	},
	getVideo: async (id)=> {//Duvidas aqui
		const json = await apiFetchGet(
				`/Search/k_uz1296mq/${id}`,
				{id}
			);
		return json;
	}
}

const myAP = ()=> {
	return myAPI;
} 
export default myAP;