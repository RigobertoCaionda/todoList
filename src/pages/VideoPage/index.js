//Para onde vem depois que se clica no video
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';//Para poder receber o parametro id passado na url
import useAPI from '../../helpers/myAPI';
import {PageContainer} from '../../components/mainComponents';
import {Fake, VideoInfoArea} from './styled';

const Page = () => {
	const api = useAPI();
	const {id} = useParams();//O nome do parametro precisa ser id? Pq e o id que passamos na url?
	const [loading, setLoading] = useState(true);//Efeito de carregamento durante a requisicao
	const [videoInfo, setVideoInfo] = useState({});//Objeto com informacoes do video
	useEffect(()=>{
		const getVideoInfo = async (id)=> {
			const json = await api.getVideo(id);
			setVideoInfo(json);
			setLoading(false);
		}
		getVideoInfo(id);
	},[api, id]);//Monitorar os 2 pq? Quem e o id afinal?

	return(
			<PageContainer>
				{loading && <Fake height={300} />}
				{videoInfo === "so para no dar warning" &&
					<h2>so para no dar warning</h2>
				}
				{!loading &&
					<VideoInfoArea>
						<div className="video-info">
							<h2>O id deste video é {id}</h2>
							<p>Com essa informação eu posso fazer uma requisição para pegar os dados deste video.</p>
						</div>
					</VideoInfoArea>
				}
			</PageContainer>
		);
}
export default Page;