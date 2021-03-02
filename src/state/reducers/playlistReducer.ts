import { ActionType } from '../action-types';
import { Action } from '../actions';

interface PlayListState {
    loading: boolean;
    error: string | null;
    data: string;
  }
  
  const initialState = {
    loading: false,
    error: null,
    data: '',
  };
  
  const reducer = (
    state: PlayListState = initialState,
    action: Action
  ): PlayListState => {
    switch (action.type) {
      case ActionType.SAVE_SONGS:
        return { loading: true, error: null, data: '' };
      case ActionType.SAVE_SONGS_SUCCESS:
        return { loading: false, error: null, data: action.payload };
      case ActionType.SAVE_SONGS_ERROR:
        return { loading: false, error: action.payload, data: '' };
      default:
        return state;
    }
  };
  
  export default reducer;
  