import React, {useState, useEffect} from 'react';
import VideoItem from '../../components/partials/VideoItem';
import useAPI from '../../helpers/myAPI';
const Page = () => {
	const api = useAPI();
	const [videoList, setVideoList] = useState([]);

	useEffect(()=>{
		const getVideos = async () => {
			const vList = await api.getVideos();
			setVideoList(vList);
		}
		return getVideos();
	},[api]);
	return(
		<>
			{videoList.map((i,k)=>
						<VideoItem key={k} data={i}/>
				)}
			</>
		);
}
export default Page;