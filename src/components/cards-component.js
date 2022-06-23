/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from "react";

function CardsComponent(props)
{
  return (
    <div className="cards-container">
      {props.cards.map((card) => (
        <div
          className="card"
          key={card.id}
          data-key={card.id}
          onClick={props.onClick}
          data-clicked={card.clicked}
        >
          <img alt={card.title} src={card.imgUrl} className="card-img" />
          <p className="card-title">{card.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CardsComponent;
