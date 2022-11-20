import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Formationlist from './Composant/formationlist';
import Carte from './Carte/carte';




function App() {
  return (
    <div className="App">
     <Navbar />
     <Formationlist />
    </div>
  );
}

export default App;
