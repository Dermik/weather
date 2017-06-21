import { FETCH_WEATHER } from '../actions/index';

export default function(state = [],action) {
	console.log('action.type',action.type)
	console.log('old_state',state)
	switch (action.type) {
		case FETCH_WEATHER:
			const new_state = [action.payload.data, ...state];
			// return state.concat([action.payload.data]);
			console.log('new_state',new_state)
			return new_state;
			break;
		default:
	}
	console.log('action received',action);
	return state;
}
