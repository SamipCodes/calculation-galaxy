"use client";
import { useState } from "react";

export default function LoanEMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [result, setResult] = useState(null);

  const formatNumber = (num) => {
    if (!num) return "";
    return Math.round(num).toLocaleString("en-IN"); // Indian comma format
  };

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100; // monthly rate
    const n = parseFloat(loanTenure) * 12; // months

    if (P > 0 && r > 0 && n > 0) {
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - P;

      setResult({
        emi: emi.toFixed(2),
        totalPayment: totalPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
      });
    }
  };

  return (
    <div className="py-10 text-black flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-purple-300/20">
        <h1 className="text-3xl font-bold text-center mb-10 text-white">
          Loan EMI Calculator
        </h1>

        {/* Loan Amount */}
        <label className="block mb-2 text-purple-100">Loan Amount (₹)</label>
        <div className="flex items-center gap-3 mb-2">
          <input
            type="range"
            min="50000"
            max="1000000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full"
          />
          <input
            type="text"
            value={formatNumber(loanAmount)}
            onChange={(e) =>
              setLoanAmount(Number(e.target.value.replace(/,/g, "")) || 0)
            }
            className="w-32 p-2 rounded-lg border bg-white/70"
          />
        </div>

        {/* Interest Rate */}
        <label className="block mb-2 text-purple-100">Interest Rate (%)</label>
        <div className="flex items-center gap-3 mb-2">
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full"
          />
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-20 p-2 rounded-lg border bg-white/70"
          />
        </div>

        {/* Loan Tenure */}
        <label className="block mb-2 text-purple-100">
          Loan Tenure (Years)
        </label>
        <div className="flex items-center gap-3 mb-6">
          <input
            type="range"
            min="1"
            max="30"
            value={loanTenure}
            onChange={(e) => setLoanTenure(Number(e.target.value))}
            className="w-full"
          />
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(Number(e.target.value))}
            className="w-20 p-2 rounded-lg border bg-white/70"
          />
        </div>

        {/* Button */}
        <button
          onClick={calculateEMI}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Calculate EMI
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-purple-500/30 via-indigo-500/30 to-purple-700/30 border border-purple-200/20 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              EMI Results
            </h2>
            <p className="text-lg font-semibold text-white">
              Monthly EMI: ₹{formatNumber(result.emi)}
            </p>

            <p className="text-sm text-purple-100 mt-2">
              Total Interest: ₹{formatNumber(result.totalInterest)}
            </p>

            <p className="text-sm text-purple-100 mt-2">
              Total Amount: ₹{formatNumber(result.totalPayment)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
