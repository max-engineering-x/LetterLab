import React from "react";

import Guess from "../Guess";


import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

import { range } from "../../utils";


function GuessessList({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map(({num, id}) => {
          
          return (
            <Guess key={num} value={guesses[num]}/>
          );
        })}
      </div>
    </div>
  );
}

export default GuessessList;
