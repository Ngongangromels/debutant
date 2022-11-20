import React from 'react';
import './carte.css';
import Img1 from './img1.jpg';

export default function Carte () {
    return(
        <div className="bloc">
            <img className="photo" src={Img1} alt="belle dame" />
        </div>
    );
}