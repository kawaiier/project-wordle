import React from "react";

function GuessInput({handleSubmitGuess, gameStatus}) {

  const [tentativeGuess, settenTativeGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess)
    settenTativeGuess('')
  }

  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={handleSubmit}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          disabled={gameStatus !== 'running'}
          id="guess-input"
          type="text"
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={tentativeGuess}
          onChange={(event) => settenTativeGuess(event.target.value.toUpperCase())}
          required
        />
      </form>
    </div>
  );
}

export default GuessInput;



/*
TODO
The text input should be controlled by React state.
When the form is submitted:
The entered value should be logged to the console (for now).
The input should be reset to an empty string.
The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed.
The input should have a minimum and maximum length of 5.
NOTE: The minLength validator is a bit funky; you may wish to use the pattern attribute instead. This is discussed in more detail on the Solution page.
*/