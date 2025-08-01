import './App.css';
import React from 'react';
import ListofPlayers, { EvenPlayers, OddPlayers } from './Components/ListofPlayers';
import { ScoreBelow70 } from './Components/ListofPlayers';

function App() {
  const [flag, setFlag] = React.useState(false);

  const players = [
    { name: "Rohit", score: "256" },
    { name: "Virat", score: "150" },
    { name: "Jadeja", score: "75" },
    { name: "Hardik", score: "100" },
    { name: "Bumrah", score: "35" },
    { name: "Ashwin", score: "50" },
    { name: "Rahul", score: "80" },
    { name: "Pant", score: "120" },
    { name: "Shreyas", score: "90" },
    { name: "Ishan", score: "60" },
    { name: "KL Rahul", score: "110" },
  ]
  const IndianPlayers = [players[0], players[1], players[2], players[3], players[4]];
  const RanjiPlayers = [players[5], players[6], players[7], players[8], players[9]];

  return (
    <div className="App">
      {flag ? (
        <>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h2>List of Players having score below 70</h2>
          <ScoreBelow70 players={players} />
        </>
      ) : (
        <>
          <EvenPlayers second={players[1]} fourth={players[3]} sixth={players[5]} />
          <hr />
          <OddPlayers first={players[0]} third={players[2]} fifth={players[4]} />
          <hr />
          <h2>List of Indian Players Merged</h2>
          <ListofPlayers players={[...IndianPlayers, ...RanjiPlayers]} />
          <hr />
        </>
      )}
    </div>
  );
}

export default App;
