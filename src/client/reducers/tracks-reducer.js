import {fromJS} from 'immutable';
const initialState = fromJS({
  tracks: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRACKS': {
      return state.set('tracks', action.tracks);
      break;
    }
    default:
      return state;
  }
}