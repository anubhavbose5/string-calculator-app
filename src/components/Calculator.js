import React, { useState } from "react";
import { add } from "../utils/stringCalculator";
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle the calculation
  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(`Result: ${sum}`);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="calculator">
      <h1>String Calculator</h1>
      <p>Enter comma-separated numbers or custom delimiter format:</p>
      <input
        type="text"
        placeholder="Enter numbers..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>

      {result && <p className="result">{result}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Calculator;
