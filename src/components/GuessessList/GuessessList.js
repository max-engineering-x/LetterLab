import React from "react";

function GuessessList({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {guesses.map(({value, id}) => {
          return (
            <p key={id} className="guess">
              {value}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default GuessessList;
