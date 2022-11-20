import React from "react";
import "./formationlist.css";
import Formation from "./formattion";



/**
 * Ce composant est suppose afficher une liste de formation, mais dans le future on peux vouloir afficher une liste de Persone par example et le composant doit pouvoir etre fonctionel par consequant c est mieux de pas laisser les donnes a l'interieur de ce composant. 
 * On peux aussi avoir envie de changer le titre du composant dans ce cas c est mieux d'avoir aussi une propriete pour le titre 
 */
export default function Formationlist({formations, listTitle}) {
  return (
    <div className="formationlist">
      <h2 className="titre">{listTitle}</h2>
      <div className="bloc">
        {formations.map((formation, index) => {
          return <Formation key={index} {...formation} />;
        })}
      </div>
    </div>
  );
}
