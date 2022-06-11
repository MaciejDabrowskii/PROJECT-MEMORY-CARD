/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Scoreboard from "./components/scoreboard";
import CardsComponent from "./components/cards";

function App()
{
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [level, setLevel] = useState({
    1: 4,
    2: 6,
    3: 8,
    4: 10,
    5: 12,
    6: 14,
    7: 16,
  });

  const [cards, setCards] = useState(
    [
      {
        name: "Ala",
        imgUrl: "",
        clicked: false,
        id: uniqid(),
      },
      {
        name: "Ola",
        imgUrl: "",
        clicked: false,
        id: uniqid(),
      },
      {
        name: "Kasia",
        imgUrl: "",
        clicked: false,
        id: uniqid(),
      },
      {
        name: "Monika",
        imgUrl: "",
        clicked: false,
        id: uniqid(),
      },
      {
        name: "Karol",
        imgUrl: "",
        clicked: false,
        id: uniqid(),
      },
      {
        name: "Dawid",
        imgUrl: "",
        clicked: false,
        id: uniqid(),
      },
      {
        name: "Wojtek",
        imgUrl: "",
        clicked: false,
        id: uniqid(),
      },
      {
        name: "Basia",
        imgUrl: "",
        clicked: false,
        id: uniqid(),
      },
      {
        name: "Zyta",
        imgUrl: "",
        clicked: false,
        id: uniqid(),
      },
      {
        name: "Maciek",
        imgUrl: "",
        clicked: false,
        id: uniqid(),
      },
    ],
  );

  const [cardsArray, setCardsArray] = useState([...cards].slice(0, level[currentLevel]));

  const incrementScore = (e) =>
  {
    setScore(score + 1);
  };

  const updateBestScore = () =>
  {
    if (score > bestScore)
    {
      setBestScore(score);
    }
  };

  const updateCardsArray = () =>
  {
    setCardsArray([...cards].slice(0, level[currentLevel]));
  };

  const restetGame = () =>
  {
    setScore(0);
    setCurrentLevel(1);
    setCardsArray([...cards].slice(0, level[currentLevel]));
    cardsArray.map((card) =>
    {
      setCardsArray([...cardsArray], card.clicked = false);
    });
  };

  const shuffleCards = () =>
  {
    setCardsArray(
      cardsArray
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value),
    );
  };

  const markClick = (e) =>
  {
    cardsArray.map((card, index) =>
    {
      if (card.id === e.target.dataset.key)
      {
        setCardsArray([...cardsArray], [...cardsArray][index].clicked = true);
      }
    });
    shuffleCards();

    e.target.dataset.clicked !== "true"
      ? incrementScore()
      : restetGame();
    console.log(level[currentLevel]);
  };

  const updateLevel = () =>
  {
    if (score === cardsArray.length) setCurrentLevel(currentLevel + 1);
  };

  useEffect(() =>
  {
    updateBestScore();
    updateLevel();
  }, [score]);

  useEffect(() =>
  {
    updateCardsArray();
    cardsArray.map((card) =>
    {
      setCardsArray([...cardsArray], card.clicked = false);
    });
  }, [currentLevel]);

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} level={currentLevel} />
      <CardsComponent cards={cardsArray} markClick={markClick} />
    </div>
  );
}

export default App;
