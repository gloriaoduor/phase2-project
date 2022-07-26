
import './App.css';
import Genres from './genres';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="phase2-project\src\download.jpg" className="" alt="logo" />
        <p>
         Welcome to The Movies Bay!
        </p>
        <input type='text' value=''></input> 
        <button type='submit'>Search</button>
      </header>
      <Genres />
    </div>
  );
}

export default App;
