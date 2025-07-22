import './App.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div style={{textAlign: "center"}} className="container">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
