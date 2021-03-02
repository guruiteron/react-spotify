import { combineReducers } from 'redux';
import SongsState from './songsReducer';
import PlayListState from './playlistReducer';

const reducers = combineReducers({
  songs: SongsState,
  savePlayList: PlayListState
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
