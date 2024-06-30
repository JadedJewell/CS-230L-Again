import './App.css';
import Card from './Componets/Card'
import Navbar from './Componets/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 702</h2>
      <p>WVU ID: 800313162</p>
      <p>Hi I am Shawn</p>
      <div class="card-group">
        <Card title="Card 01" />
        <Card title="Card 02" />
        <Card title="Card 03" />
      </div>
    </div>
  );
}

export default App;
