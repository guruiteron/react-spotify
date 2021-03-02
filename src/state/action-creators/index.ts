import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchSongs = (term: string) => {
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
            Authorization: "Bearer BQADtLO1ckYhZO_IjxueVBj1kC-jZHEoRXO1MfsDF3xXa6O-f6HAJxL0jRYa9BE1eNFovtuUspQpedIisWmPU4TR2ahYVcvkUnRK3STmXgKqKjB2carM50UgAK-WUxDC4xHnjgZ_HKLxEVgG6vJCOJY1RFQZkPp1Chvc32BbvJNGCULTIxXpQr5WoAmXwlo", 
          }
        }
      );
      
      const names = data.tracks.items.map((result: any) => {
        return {name: result.name, id: result.id, image_url: result.album.images[0].url, uri: result.uri};
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

export const saveSongs = (urisArray: string[]) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAVE_SONGS,
    });

    try {
      const options = {
        headers: {Authorization: "Bearer BQADtLO1ckYhZO_IjxueVBj1kC-jZHEoRXO1MfsDF3xXa6O-f6HAJxL0jRYa9BE1eNFovtuUspQpedIisWmPU4TR2ahYVcvkUnRK3STmXgKqKjB2carM50UgAK-WUxDC4xHnjgZ_HKLxEVgG6vJCOJY1RFQZkPp1Chvc32BbvJNGCULTIxXpQr5WoAmXwlo"}
      };
      const { data } = await axios.post(
        'https://api.spotify.com/v1/users/e2h2yd3h4ocha4x94sjy8ttj9/playlists',
        {name: 'Test playlist'},
        options
      )

      if (data.id) {
        await axios.post(
          'https://api.spotify.com/v1/users/e2h2yd3h4ocha4x94sjy8ttj9/playlists/'+data.id+'/tracks',
          { uris: urisArray },
          options
        )
      }

      dispatch({
        type: ActionType.SAVE_SONGS_SUCCESS,
        payload: "success",
      });
    } catch (err) {
      dispatch({
        type: ActionType.SAVE_SONGS_ERROR,
        payload: err.message,
      });
    }
  };
};