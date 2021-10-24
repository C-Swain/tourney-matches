import React from 'react'; //optional

function Player() {
const noWins = ""
const oneWin = ""
const wins = ""
  return (

  <article className="Player">
  <h1>John <span>Secret</span> Doe</h1>
  {noWins}<h2 className="zero">Currently with no wins</h2>
  {oneWin}<h2>Currently at 1 win</h2>
  {wins}<h2>Currently at 1+ wins</h2>
</article>
  );

}

export default Player; 