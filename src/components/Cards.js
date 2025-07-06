import React from "react";

function Cards({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt="Card Image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Cards;
