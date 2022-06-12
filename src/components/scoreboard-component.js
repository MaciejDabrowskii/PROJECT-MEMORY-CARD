/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from "react";

function ScoreboardComponent(props)
{
  return (
    <div
      className="scoreboard-container"
    >
      <div
        className="scoreboard-score"
      >
        Score:
        {" "}
        {props.score}
      </div>
      <div
        className="scoreboard-bestScore"
      >
        Best Score:
        {" "}
        {props.bestScore}
      </div>
      <div
        className="scoreboard-level"
      >
        Level:
        {" "}
        {props.level}
      </div>
    </div>
  );
}
export default ScoreboardComponent;
