import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import matchData from './components/data/matchData';
import playerData from './components/data/playerData';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';
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
