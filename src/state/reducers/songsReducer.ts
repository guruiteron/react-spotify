import { ActionType } from '../action-types';
import { Action } from '../actions';

interface SongsState {
  loading: boolean;
  error: string | null;
  data: { id: string, name: string, image_url: string, uri: string }[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: SongsState = initialState,
  action: Action
): SongsState => {
  switch (action.type) {
    case ActionType.SEARCH_SONGS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_SONGS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_SONGS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
