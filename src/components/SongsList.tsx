import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { SearchBar } from './Search';

type PlayList = {
  id: string,
  name: string,
  image_url: string,
  uri: string
};

const initialPlayLists: PlayList[] = [];

function SongsList() {
  
  const [playList, setPlayList] = useState(initialPlayLists);
  const { saveSongs } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.songs
  );
  
  
  const onAddPlayList = (event: any) => {
    console.log("guru");
    setPlayList([...playList, event])
  }

  const removePlayList = (event: any) => {
    setPlayList(playList.filter(playList => playList.id !== event.id));
  }

  const savePlayList = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let tracks = playList;
    if(tracks.length) {
      let trackURIs = tracks.map(trackIndex => trackIndex.uri);
      saveSongs(trackURIs);
      setPlayList([]);
    };
  }

  return (
    <div>
      
      <SearchBar />
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <div className="ui two column grid">
        <div className="column" style={{marginTop: "40px", border: "1px solid rgba(34,36,38,.15)"}}>
          <h3>Songs list</h3>
          {!error && !loading && data.map((song) => <div className="ui relaxed divided list" style={{border: "1px solid rgba(34,36,38,.15)"}}>
            <div className="item" key={song.id}>
              <img className="ui small image" src={song.image_url} style={{ width: 75 }} />
              <div className="content" style={{padding: "20px", width: "250px"}}>
                <a className="header">{song.name}</a>
                <div className="description">Updated 10 mins ago</div>
              </div>
              <div className="right floated content" style={{padding: "20px"}}>
                <button className="ui blue basic button" onClick={() => onAddPlayList(song)} >Add</button>
              </div>
            </div>
          </div>)}
        </div>
        <div className="column" style={{marginTop: "40px", border: "1px solid rgba(34,36,38,.15)"}}>
          <h3>play list</h3>
          {playList.map((song) => <div className="ui relaxed divided list" style={{border: "1px solid rgba(34,36,38,.15)"}}>
            <div className="item" key={song.id}>
              <img className="ui small image" src={song.image_url} style={{ width: 75 }} />
              <div className="content" style={{padding: "20px", width: "250px"}}>
                <a className="header">{song.name}</a>
                <div className="description">Updated 10 mins ago</div>
              </div>
              <div className="right floated content" style={{padding: "20px"}}>
                <button className="ui red basic button" onClick={() => removePlayList(song)} >remove</button>
              </div>
            </div>
          </div>)}
          {playList.length ?
            <div className="right floated content" style={{padding: "20px"}}>
              <form onSubmit={savePlayList}>
                <button className="fluid ui primary button">Save to spotify</button>
              </form>
            </div>
          : ""
          }
        </div>
      </div>
    </div>
  );
}

export default SongsList;
