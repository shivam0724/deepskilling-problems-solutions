import './App.css';
import OfficeSpace from './Components/OfficeSpace';

function App() {
  const offices = [
    { Name: "WeWork", Rent: 45000, Address: "Mumbai" },
    { Name: "Regus", Rent: 65000, Address: "Delhi" },
    { Name: "Awfis", Rent: 55000, Address: "Bengaluru" },
    { Name: "Smartworks", Rent: 70000, Address: "Hyderabad" }
  ];

  return (
    <div className="App">
      <h2 style={{ marginLeft: "20px" }}>Offices Space, At Affordable Range</h2>
      <div className='offices-container'>
        {offices.map((office, index) => (
          <OfficeSpace key={index} office={office} />
        ))}
      </div>
    </div>
  );
}

export default App;
