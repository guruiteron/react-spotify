import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_SONGS,
    });

    try {
      const { data } = await axios.get(
        'https://api.spotify.com/v1/search',
        {
          params: {
            q: term,
            type: "track"
          },
          headers: { 
            Authorization: "Bearer BQB1DdSrsq6mwDzbEFn-CwTMbY5YdoeXK-S_eXuYlkoQ0xzzDc3SFDaQVQQ9g1AORMT-pb88ueYuDcHTC2hQzlugvkSCFbmdFEilTDY_IL6x0wwIy4jOVnCrSsG3akCg6h05i9wbyKQJQ3DycdNDYKqg5fyEd4B3BTos8T-vxajDC1myetolh-Tga-JiRKFO03Hll59bp0v8tHpQ-NKaDNwFT4fCG8ZnF1KS0unlUrI_w1ifFzFMiUzxlvDudppigbyIhs4bUHkzNwSqQsHVp3AavRd5k_3_ukAaqdBF", 
          }
        }
      );
      
      const names = data.tracks.items.map((result: any) => {
        return [result.name, result.id, result.album.images[0].url];
      });

      dispatch({
        type: ActionType.SEARCH_SONGS_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_SONGS_ERROR,
        payload: err.message,
      });
    }
  };
};
