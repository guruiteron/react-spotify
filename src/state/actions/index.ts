import { ActionType } from '../action-types';

interface SearchSongsAction {
  type: ActionType.SEARCH_SONGS;
}

interface SearchSongsSuccessAction {
  type: ActionType.SEARCH_SONGS_SUCCESS;
  payload: { id: string, name: string, image_url: string, uri: string }[];
}

interface SearchSongsErrorAction {
  type: ActionType.SEARCH_SONGS_ERROR;
  payload: string;
}

interface SaveSongsAction {
  type: ActionType.SAVE_SONGS;
}

interface SaveSongsSuccessAction {
  type: ActionType.SAVE_SONGS_SUCCESS;
  payload: string;
}

interface SaveSongsErrorAction {
  type: ActionType.SAVE_SONGS_ERROR;
  payload: string;
}

export type Action =
  | SearchSongsAction
  | SearchSongsSuccessAction
  | SearchSongsErrorAction
  | SaveSongsAction
  | SaveSongsSuccessAction
  | SaveSongsErrorAction;

