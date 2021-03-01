import { combineReducers } from 'redux';
import SongsState from './songsReducer';

const reducers = combineReducers({
  songs: SongsState,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
