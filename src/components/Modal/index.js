import {
	ModalArea,
	 Modal,
	 ModalInfoArea,
	 ModalButtonsArea,
	 TitleTag,
	 Title,
	 TitleArea,
	 TimeCreated,
	 TimeTitle,
	 TimeDesc,
	 ModalButton,
	 StatusArea,
	 StatusTitle,
	 ScheduledTimeArea,
	 ScheduledTitle,
	 ScheduledDesc,
	 ScheduledInputArea,
	 ScheduledInput,
	 Input,
	 ScheduledButtonArea,
	 ScheduledButton
	} from './styled';
	import {ErrorMessage} from '../../AppStyled'; 
	import {useSelector, useDispatch} from 'react-redux';
	import {useState} from 'react';
const Page = ({index, status, setStatus}) => {
	const tasks = useSelector(state => state.taskReducer.tasks);
	const dispatch = useDispatch();
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [error, setError] = useState('');
	const handleGoBackClick = () => {
		setStatus(false);
		setError('');
		setTime('');
		setDate('');
	}

	const handleModalClick = (e) => {
		if (e.target.classList.contains('modalBg')) {
			setStatus(false);
			setError('');
			setTime('');
			setDate('');
		}
	}

	const handleSetClick = () => {
		setError('');
		let datePattern = /([0-9]{2})\/([0-9]{2})/g
		let timePattern = /([0-9]{2}):([0-9]{2})/g
		let d = date.split('/');
		let day = d[0];
		let month = d[1];
		let year = new Date().getFullYear();
		let t = time.split(':');
		let hour = t[0];
		let minute = t[1];
		let acceptableDate = true;
		let acceptableTime = true;

		if ((day > 0 && day < 32) && (month > 0 && month < 13)) {
			acceptableDate = true;
		} else {
			acceptableDate = false;
		}

		if ((hour >= 0 && hour < 24) && (minute >= 0 && minute < 60)) {
			acceptableTime = true;
		} else {
			acceptableTime = false;
		}
		if (datePattern.test(date) && timePattern.test(time) && acceptableDate && acceptableTime) {
			let chosenDate = day+'/'+month+'/'+year;
			let chosenTime = `${hour}:${minute}`;
			dispatch({
				type: 'ADD_TASK_TIME',
				payload: {
					chosenDate,
					chosenTime,
					id: index
				}
			});
			setTime('');
			setDate('');
		} else {
			setError('Date or Time not valid, type a valid pattern!');
		}
		
	}

	return (
			<ModalArea status={status} onClick={handleModalClick} className="modalBg">
				<Modal>
					<ModalInfoArea>
						<TitleArea>
							<TitleTag>Title:</TitleTag>
							<Title>
								{tasks.length > 0 &&
									tasks[index].title
								}
							</Title>
						</TitleArea>

						<StatusArea>
							<TitleTag>Status:</TitleTag>
							<StatusTitle statusColor={tasks.length > 0 ? tasks[index].done : false}>
								{tasks.length > 0 &&
									tasks[index].done ? 'Done' : 'Not Done'}
							</StatusTitle>
						</StatusArea>

						<ScheduledTimeArea>
							<ScheduledTitle>Scheduled at:</ScheduledTitle>
							<ScheduledDesc schColor={tasks.length > 0 && 
									tasks[index].chosenDate === '' ? true : false}>
								{tasks.length > 0 &&
									tasks[index].chosenDate !== '' ? 
										<>{tasks[index].chosenDate} {tasks[index].chosenTime}</> : 
										'Not defined'
								}
							</ScheduledDesc>
						</ScheduledTimeArea>

						<ScheduledInputArea>

						{error !== '' && <ErrorMessage>{error}</ErrorMessage>}
							<ScheduledInput>
								<Input type="text" placeholder="schedule the date (eg: 12/05)"
								value={date} onChange={e=>setDate(e.target.value)}/>
								<Input type="text" placeholder="schedule the time (eg: 00:50)"
								value={time} onChange={(e)=>setTime(e.target.value)}/>
							</ScheduledInput>

							<ScheduledButtonArea>
								<ScheduledButton onClick={handleSetClick}>Set</ScheduledButton>
							</ScheduledButtonArea>
						</ScheduledInputArea>

						<TimeCreated>
							<TimeTitle>Create on:</TimeTitle>
							<TimeDesc>
								{tasks.length > 0 && tasks[index].date} time: 
									{tasks.length > 0 && tasks[index].time}
								</TimeDesc>
						</TimeCreated>
					</ModalInfoArea>

					<ModalButtonsArea>
						<ModalButton onClick={handleGoBackClick}>Go back</ModalButton>
					</ModalButtonsArea>
				</Modal>
			</ModalArea>
		);
}
export default Page;