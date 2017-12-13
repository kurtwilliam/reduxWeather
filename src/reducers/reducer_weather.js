import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
		// create new state to return instead of manipulate old state, same as you should never set state = something, should always set state with setState
		return [ action.payload.data, ...state ]; // [city, city, city]
	}
	return state;
}