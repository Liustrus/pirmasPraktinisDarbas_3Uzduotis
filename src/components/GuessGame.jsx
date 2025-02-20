import { useState, useEffect } from "react";
import GuessForm from "./GuessForm";
import Message from "./Message";

function GuessGame() {
  const [targetNumber, setTargetNumber] = useState(null);
  const [userGuess, setUserGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("Įveskite skaičių nuo 1 iki 100");

  useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = (guess) => {
    const num = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (num === targetNumber) {
      setMessage(`Teisingai! Skaičus: ${targetNumber}. Bandymų: ${attempts + 1}`);
    } else if (num < targetNumber) {
      setMessage("Bandyk didesnį");
    } else {
      setMessage("Bandyk mažesnį");
    }
  };

  return (
    <div>
      <h2>Atspėkite skaičių!</h2>
      <GuessForm userGuess={userGuess} setUserGuess={setUserGuess} handleGuess={handleGuess} />
      <Message message={message} />
    </div>
  );
}

export default GuessGame;
