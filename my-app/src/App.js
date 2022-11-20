import React from "react"
import './App.css';
import Navbar from './components/Navbar';
import {Formationlist} from './components/Formation';
import {formations} from "./mock/data"

function App() {
  // dans la plus part des application la liste de formation va venir d'un serveur, et les donnees de ce serveur vont etre sauvegarder dans le state du composant app
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false)
  //eslint-disable-next-line
  const [error, setError] = React.useState(undefined);

  React.useEffect(()=> {
    // ici on simule le fait que les donnees peuvent prendre du temp pour charger pour montrer a quoi le loading state sert et pourquoi il est important afin de montrer au visiteurs du site que les donnees sont entrain d'etre charge
    setLoading(true)
    setTimeout(()=>{
      setData(formations);
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="App">
     <Navbar />
     {
      loading && (
        <div>
          Loading ... 
        </div>
      )
     }
     {
      error && (
        <div>
          On error occured during the request of formation list
        </div>
      )
     }
     {
      data.length > 0 && (
        <Formationlist formations={data} listTitle="FORMATIONS"/>
      )
     }
    </div>
  );
}

export default App;
