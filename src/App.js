/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import "./App.css";
import "./assets/fonts/Pokemon Solid.ttf";
import React, { useState, useEffect } from "react";
import ScoreboardComponent from "./components/scoreboard-component";
import CardsComponent from "./components/cards-component";
import FooterComponent from "./components/footer-component";
import HeaderComponent from "./components/header-component";
import Cards from "./components/cards";
import GameOverModalComponent from "./components/gameover-modal-component";

function App()
{
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [displayModal, setDisplayModal] = useState(false);
  const [level, setLevel] = useState({
    1: 4,
    2: 6,
    3: 8,
    4: 10,
    5: 12,
    6: 14,
    7: 16,
  });

  const cards = Cards();

  const [cardsArray, setCardsArray] = useState(
    [...cards].slice(0, level[currentLevel]),
  );

  const incrementScore = () =>
  {
    setScore((prevState) => (prevState + 1));
    setCurrentScore((prevState) => (prevState + 1));
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

  const shuffleCards = () =>
  {
    setCardsArray(
      [...cardsArray]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value),
    );
  };

  const resetGame = () =>
  {
    setScore(0);
    setCurrentScore(0);
    setCurrentLevel(1);
    setCardsArray(cardsArray.map((card) => ({ ...card, clicked: false })));
    setCardsArray([...cards].slice(0, level[currentLevel]));
  };

  const gameOver = () =>
  {
    setDisplayModal(true);
  };

  const restartGame = () =>
  {
    resetGame();
    setDisplayModal(false);
  };

  const onClick = (e) =>
  {
    if (e.target.dataset.clicked !== "true")
    {
      incrementScore();
      setCardsArray(
        cardsArray.map((card, index) =>
        {
          if (card.id === e.target.dataset.key)
          {
            return {
              ...card,
              clicked: true,
            };
          }
          return card;
        }),
      );
    }
    if (e.target.dataset.clicked === "true" || currentScore === 70) gameOver();
  };

  const updateLevel = () =>
  {
    if (currentScore === cardsArray.length) setCurrentLevel(currentLevel + 1);
  };

  useEffect(() =>
  {
    updateBestScore();
    updateLevel();
  }, [score]);

  useEffect(() =>
  {
    updateLevel();
    shuffleCards();
  }, [currentScore]);

  useEffect(() =>
  {
    updateCardsArray();
    setCurrentScore(0);
    setCardsArray(cardsArray.map((card) => ({ ...card, clicked: false })));
    setCardsArray([...cards].slice(0, level[currentLevel]));
  }, [currentLevel]);

  return (
    <div className="App">
      {displayModal && (
        <GameOverModalComponent
          score={score}
          restartGame={restartGame}
          closeModal={restartGame}
        />
      )}
      <HeaderComponent />
      <ScoreboardComponent
        score={score}
        bestScore={bestScore}
        level={currentLevel}
      />
      <CardsComponent cards={cardsArray} onClick={onClick} />
      <FooterComponent />
    </div>
  );
}

export default App;
