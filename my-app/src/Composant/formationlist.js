import React from 'react';
import './formationlist.css';
import Formation from './formattion';

export default function Formationlist () {

    const formations = [
        {
            title:  'Developpement web / 5mois',
            img:  'https://via.placeholder.com/150x200',
            desc: "    Sans surprise, le secteur du web ne connait pas la crise.   En effet, l’usage désormais quotidien du numérique et de ses outils par les consommateurs oblige les entreprises à prendre le virage du digital. "
        },
        {
            title: 'analyste cybersécurite',
            img:  'https://via.placeholder.com/150x200',
            desc: "    Sans surprise, le secteur du web ne connait pas la crise.   En effet, l’usage désormais quotidien du numérique et de ses outils par les consommateurs oblige les entreprises à prendre le virage du digital. "

        },
        {
            title: 'Data Analyst',
            img:  'https://via.placeholder.com/150x200',
            desc: "    Sans surprise, le secteur du web ne connait pas la crise.   En effet, l’usage désormais quotidien du numérique et de ses outils par les consommateurs oblige les entreprises à prendre le virage du digital. "
        }
    ]
    return (
         <div className='formationlist'>
         <h2 className='titre'>FORMATION</h2>
         <div className='bloc'>
         {formations.map((formation, index) => {
                return <Formation key={index} {...formation} />;
            })}
         </div>
         </div>
    );
}