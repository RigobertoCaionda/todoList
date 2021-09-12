import {useState} from 'react';
import {
		HomeArea, 
		SearchInput, 
		Alarme, 
		AlarmMessage,
		Message,
		XButton
	} from './styled';
import {PageContainer} from '../../AppStyled';
import TaskItem from '../../components/TaskItem';
import Modal from '../../components/Modal';
import {useSelector, useDispatch} from 'react-redux';
const Page = () => {
	const [search, setSearch] = useState('');
	const [selectedTask, setSelectedTask] = useState(0);
	const [status, setStatus] = useState(false);
	const [ring, setRing] = useState('');
	const dispatch = useDispatch();
	const tasks = useSelector(state => state.taskReducer.tasks);

	let date = new Date();
	let monthIndex = date.getMonth();
	let day = date.getDate();
	let year = date.getFullYear();
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
	'October', 'November', 'December'];
	let cDate = `${months[monthIndex]} ${day}, ${year}`;
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let time = `${hours}:${minutes}`;
	switch (day) {
		case 1:
			day = `${day}st`;
		break;
		case 2:
			day = `${day}nd`;
		break;
		case 3:
			day = `${day}rd`;
		break;
		default:
		day = `${day}th`;
	}
	if (hours < 10) {
		hours = `0${hours}`;
	}

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	let timer;
	const match = () => {
		let d = new Date();
		let month = (d.getMonth() + 1);
		if (month < 10) {
			month = `0${month}`;
		}
		let day = d.getDate();
		if (day < 10) {
			day = `0${day}`;
		}
		let year = d.getFullYear();
		let date = `${day}/${month}/${year}`;
		let hour = d.getHours();
		if (hour < 10) {
			hour = `0${hour}`;
		}
		let minute = d.getMinutes();
		if (minute < 10) {
			minute = `0${minute}`;
		}
		let time = `${hour}:${minute}`;
		if (tasks.length > 0) {
			// eslint-disable-next-line
			tasks.map((item, index)=>{
				if ((tasks[index].chosenDate === date) && (tasks[index].chosenTime === time)) {
					clearInterval(timer);
					setRing(tasks[index].title);
					document.querySelector('audio').play();

				}
			});
		}
	}
	timer = setInterval(match, 1000);
	const handleSearch = (e) => {
		if (e.keyCode === 13 && search !== '') {
			dispatch({
				type: 'ADD_TASK',
				payload: {
					search,
					done: false,
					date: cDate,
					time,
					chosenDate: '',
					chosenTime: ''
				}
			});
			setSearch('');
		}
	}

	return (
			<HomeArea>
				<PageContainer>

				{ring !== '' &&
						<AlarmMessage>
							<Message>{ring}</Message>
							<XButton onClick={e=>setRing('')}>X</XButton>
						</AlarmMessage>
					}
					<SearchInput type="text" placeholder="Create a task to do" 
					value={search} onChange={(e)=>setSearch(e.target.value)} onKeyUp={handleSearch}/>

					{tasks.length > 0 &&
						tasks.map((item, index)=>(
								<TaskItem key={index} data={item} taskIndex={index} 
								setSelectedTask={setSelectedTask} setStatus={setStatus}/>
							))
					}
					<Alarme src="/assets/applause3.mp3"/>
				</PageContainer>
				<Modal index={selectedTask} status={status} setStatus={setStatus}/>
			</HomeArea>
		);
}
export default Page;