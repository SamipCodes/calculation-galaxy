"use client";
import { useState } from "react";

export default function MathCalculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        // replace custom symbols with JS operators
        const expression = input.replace(/×/g, "*").replace(/÷/g, "/");
        const result = Function(`return (${expression})`)(); // safer than eval
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ["7", "8", "9", "÷"],
    ["4", "5", "6", "×"],
    ["1", "2", "3", "-"],
    ["0", ".", "C", "+"],
    ["="],
  ];

  return (
    <div className="py-10 text-black flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl w-full max-w-xs border border-purple-300/20">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-200">
          Math Calculator
        </h1>

        {/* Display */}
        <div className="bg-white/80 rounded-lg p-4 mb-4 text-right text-2xl font-semibold overflow-x-auto">
          {input || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.flat().map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              className={`p-4 rounded-xl shadow-md text-lg font-bold transition 
                ${
                  btn === "="
                    ? "col-span-4 bg-purple-500 text-white hover:bg-purple-600"
                    : btn === "C"
                    ? "bg-red-400 text-white hover:bg-red-500"
                    : "bg-white/70 hover:bg-purple-200"
                }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
