import { Provider } from 'react-redux';
import { store } from '../state';
import SongsList from './SongsList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="ui container" style={{padding: 20}} >
        <div>
          <h1>Search For a Songs</h1>
          <SongsList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
