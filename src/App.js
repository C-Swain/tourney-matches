import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import matchData from './components/data/matchData';
import playerData from './components/data/playerData';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';
import './App.css';

function App() {
  const preparedPlayerData = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(preparedPlayerData,matchData)
  return (
    <div className="App">
    <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
    <PlayerList parsedPlayerData= {parsedPlayerData} />
    <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
