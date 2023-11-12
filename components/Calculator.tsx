import React, { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number: string) => {
    if (operator) {
      setSecondNumber(secondNumber + number);
    } else {
      setFirstNumber(firstNumber + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
  };

  const calculate = () => {
    let result;
    switch (operator) {
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        break;
      case "*":
        result = Number(firstNumber) * Number(secondNumber);
        break;
      case "/":
        result = Number(firstNumber) / Number(secondNumber);
        break;
      default:
        return;
    }
    setResult(result.toString());
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult("");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-4">
        <input
          type="text"
          value={firstNumber}
          readOnly
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          value={operator}
          readOnly
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          value={secondNumber}
          readOnly
          className="border-2 border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number.toString())}
            className="bg-blue-500 text-white rounded-md p-2"
          >
            {number}
          </button>
        ))}
        {["+", "-", "*", "/"].map((operator) => (
          <button
            key={operator}
            onClick={() => handleOperatorClick(operator)}
            className="bg-green-500 text-white rounded-md p-2"
          >
            {operator}
          </button>
        ))}
      </div>
      <button
        onClick={calculate}
        className="bg-yellow-500 text-white rounded-md p-2"
      >
        Calculate
      </button>
      <button onClick={clear} className="bg-red-500 text-white rounded-md p-2">
        Clear
      </button>
      <div>
        <h2 className="text-2xl">Result: {result}</h2>
      </div>
    </div>
  );
};

export default Calculator;