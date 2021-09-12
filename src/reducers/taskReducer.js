const initialState = {
	tasks: []
}
const Page = (state = initialState, action) => {
	let tasks = [...state.tasks];
	// eslint-disable-next-line
	switch(action.type) {
		case 'ADD_TASK':
			tasks.unshift({
				title: action.payload.search,
				done: action.payload.done,
				date: action.payload.date,
				time: action.payload.time,
				chosenDate: action.payload.chosenDate,
				chosenTime: action.payload.chosenTime
			});
			return {...state, tasks: tasks};//Deve retornar tasks em vez de action.payload.search pq nos queremos retornar o array, se for so action.payload.tasks vai retornar so um texto e nao dara para fazer map.
			// eslint-disable-next-line
		break;

		case 'ADD_TASK_TIME':
			if (tasks[action.payload.id]) {
				tasks[action.payload.id].chosenDate = action.payload.chosenDate;
				tasks[action.payload.id].chosenTime = action.payload.chosenTime;
			}
			return {...state, tasks};
			// eslint-disable-next-line
		break;
		case 'TASK_DONE':
			if (tasks[action.payload.id]) {
				tasks[action.payload.id].done = true;
			}
			return {...state, tasks};
			// eslint-disable-next-line
		break;
		case 'TASK_UNDONE':
			if (tasks[action.payload.id]) {
				tasks[action.payload.id].done = false;
			}
			return {...state, tasks: tasks};
			// eslint-disable-next-line
		break;
		case 'TASK_DELETE':
			tasks = tasks.filter((item, index)=> index !== action.payload.id);
			return {...state, tasks};
			// eslint-disable-next-line
		break;
	}
	return state;
}
export default Page;