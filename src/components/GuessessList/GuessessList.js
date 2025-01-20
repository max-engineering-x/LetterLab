import React from "react";

import { range } from "../../utils";

import Guess from "../Guess";


import {NUM_OF_GUESSES_ALLOWED} from "../../constants";



function GuessessList({ guesses, answer }) {


  return (
    <div>
      <div className="guess-results">


        {range(NUM_OF_GUESSES_ALLOWED).map((num)  => (


           <Guess
           key={num}
           value={guesses[num] ? guesses[num].value : ""}
           answer = { answer }
           />



        ))}



      </div>
    </div>
  );
}

export default GuessessList;
