import React from 'react'; //optional
import Player from './Player';
import playerData from './data/playerData';
import { preparePlayerData , addWinsToPlayers } from '../helpers/playerHelpers';
import matchData from './data/matchData';


function PlayerList(props) {
  const preparedPlayerData = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(preparedPlayerData, matchData);

  const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      { parsedPlayers }
    </section>
  );
}
  export default PlayerList;
