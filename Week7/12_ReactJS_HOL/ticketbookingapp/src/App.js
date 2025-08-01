import './App.css';
import React from 'react';
import GuestGreeting from './Components/GuestGreeting';
import UserGreeting from './Components/UserGreeting';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  return (
    <div className="App">
      {isLogged ? <UserGreeting isLogged={isLogged} setIsLogged={setIsLogged} /> : <GuestGreeting isLogged={isLogged} setIsLogged={setIsLogged} />}
    </div>
  );
}

export default App;