import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputText from "../InputText";
import GuessessList from "../GuessessList"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuessess] = React.useState([]);

  function handleSubmitGuess(guess){

    const nextGuess = {

      value: guess,
      id: crypto.randomUUID(),

    }
    
    setGuessess([...guesses, nextGuess])

  }

  return (
    <>
    <GuessessList guesses = { guesses } answer = { answer } />
      <InputText handleSubmitGuess = {handleSubmitGuess} />
    </>
  );
}

export default Game;
