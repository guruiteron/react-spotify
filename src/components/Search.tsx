import { useState } from 'react';
import { useActions } from '../hooks/useActions';

export const SearchBar: React.FC = () => {
    const [searchSong, setSearchSong] = useState('');
    const { searchSongs } = useActions();

    const handleSearchState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchSong(e.target.value)
      }
    
      const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        searchSongs(searchSong);
      };

    return (
        <form onSubmit={onSubmit}>
            <div className="ui fluid action input">
              <input type="text" placeholder="Search..." value={searchSong} onChange={handleSearchState} />
              <button className="ui button">Search</button>
            </div>
        </form>
    )
}