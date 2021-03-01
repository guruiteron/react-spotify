import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const SongsList: React.FC = () => {
  const [searchSong, setSearchSong] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.songs
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(searchSong);
  };

  return (
    <div className="" >
      <form onSubmit={onSubmit}>
        <div className="ui fluid action input">
          <input type="text" placeholder="Search..." value={searchSong} onChange={(e) => setSearchSong(e.target.value)} />
          <button className="ui button">Search</button>
        </div>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      
      {!error && !loading && data.map((song) => 
      <div className="ui relaxed divided list">
        <div className="item" key = {song[1]}>
          <img className="ui small image" src={song[2]} />
          <div className="content">
            <a className="header">{song[0]}</a>
            <div className="description">Updated 10 mins ago</div>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default SongsList;
