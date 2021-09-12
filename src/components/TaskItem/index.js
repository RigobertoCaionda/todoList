import {TaskArea, 
		TaskName, 
		TaskOptions,
		TaskButton
	} from './styled';
	import {useDispatch} from 'react-redux';
const Page = ({data, taskIndex, setSelectedTask, setStatus}) => {
	const dispatch = useDispatch();
	const handleDoneButton = () => {
		dispatch({
			type: 'TASK_DONE',
			payload: {id: taskIndex}
		});
	}
	const handleUndoneButton = () => {
		dispatch({
			type: 'TASK_UNDONE',
			payload: {id: taskIndex}
		});
	}

	const handleDeleteButton = () => {
		dispatch({
			type: 'TASK_DELETE',
			payload: {id: taskIndex}
		});
	}

	const handleViewClick = () => {
		setSelectedTask(taskIndex);
		setStatus(true);
	}

	return (
			<TaskArea done={data.done}>
				<TaskName>{data.done &&
					<del>{data.title}</del>
				}

				{!data.done &&
					data.title
				}
			</TaskName>
				<TaskOptions>
					<TaskButton onClick={handleDoneButton}>Done</TaskButton>
					<TaskButton onClick={handleUndoneButton}>Undo</TaskButton>
					<TaskButton onClick={handleDeleteButton}>Delete</TaskButton>
					<TaskButton onClick={handleViewClick}>View</TaskButton>
				</TaskOptions>
			</TaskArea>
		);
}
export default Page;