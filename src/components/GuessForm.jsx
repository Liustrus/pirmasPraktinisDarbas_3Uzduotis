function GuessForm({ userGuess, setUserGuess, handleGuess }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!userGuess.trim()) return;
      handleGuess(userGuess);
      setUserGuess("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Įveskite skaičių"
          min="1"
          max="100"
        />
        <button type="submit">Spėti</button>
      </form>
    );
  }
  
  export default GuessForm;
  