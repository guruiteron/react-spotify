import { ActionType } from '../action-types';

interface SearchSongsAction {
  type: ActionType.SEARCH_SONGS;
}

interface SearchSongsSuccessAction {
  type: ActionType.SEARCH_SONGS_SUCCESS;
  payload: string[];
}

interface SearchSongsErrorAction {
  type: ActionType.SEARCH_SONGS_ERROR;
  payload: string;
}

export type Action =
  | SearchSongsAction
  | SearchSongsSuccessAction
  | SearchSongsErrorAction;
