import React from "react";
import "./formation.css";

export default function Formation({ title, img, desc }) {
  return (
    <div className="tire">
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <p>{desc}</p>
    </div>
  );
}
