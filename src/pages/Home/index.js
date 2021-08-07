import React, {useState, useEffect} from 'react';
import VideoItem from '../../components/partials/VideoItem';
import {FakeLoading} from '../../components/mainComponents';
import useAPI from '../../helpers/myAPI';
const Page = () => {
	const api = useAPI();
	const [videoList, setVideoList] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		const getVideos = async () => {
			const vList = await api.getVideos();
			setVideoList(vList);
			setLoading(false);
		}
		return getVideos();
	},[api]);
	return(
		<>
			{loading && 
				<FakeLoading>Carregando dados...</FakeLoading>
			}
			{videoList.map((i,k)=>
						<VideoItem key={k} data={i}/>
				)}
			</>
		);
}
export default Page;