import React from "react";

function InputText({ handleSubmitGuess }) {


  const [guess, setGuess] = React.useState("");


  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(  guess  );

    setGuess("");
    
  }


  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label className="guess-input" htmlFor="input-text">
        Enter guess:
      </label>
      <input
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        className="guess-input"
        id="input-text"
        type="text"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default InputText;
