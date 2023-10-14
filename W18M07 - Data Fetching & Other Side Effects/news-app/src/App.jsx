import './App.css';
import NewsList from './components/NewsList/NewsList';

const App = () => {
  return(
    <div className='App'>
      <div className='App-header'>
        <h1> Data Fetching & Other Side Effects </h1>
        <NewsList/>
      </div>
    </div>
  );
}

export default App;
