/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
import React from "react";

function GameOverModalComponent(props)
{
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button
          type="button"
          className="modal-close-btn"
          onClick={() => props.closeModal(false)}
        >
          ✖
        </button>
        <div className="modal-title">
          Game Over
        </div>
        <div className="modal-body">
          Your final score is
          {" "}
          {props.score}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="modal-restartGame-btn"
            onClick={props.restartGame}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameOverModalComponent;
