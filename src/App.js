import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import Player from './components/Player';
import Match from './components/Match';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
    <PlayerList />
    <MatchList />
    </div>
  );
}

export default App;
