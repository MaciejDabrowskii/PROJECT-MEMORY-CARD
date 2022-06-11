/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function CardsComponent(props)
{
  return (
    <div>
      {
       props.cards
         .map((card) => (
           <div
             className="card"
             key={card.id}
             data-key={card.id}
             onClick={props.markClick}
             data-clicked={card.clicked}
           >
             <p
               className="card-title"
             >
               {card.name}
             </p>
             <p
               className="card-img"
             >
               {`${card.clicked}`}
             </p>
           </div>
         ))
        }
    </div>
  );
}

export default CardsComponent;
