"use client";
import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("ft"); // ft or cm
  const [weightUnit, setWeightUnit] = useState("kg"); // kg or lb
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    let hMeters = 0;
    let wKg = 0;

    // ✅ Convert height to meters
    if (heightUnit === "ft") {
      const totalInches = Number(height) * 12 + Number(inches || 0);
      hMeters = totalInches * 0.0254;
    } else {
      hMeters = Number(height) / 100; // cm → m
    }

    // ✅ Convert weight to kilograms
    if (weightUnit === "kg") {
      wKg = Number(weight);
    } else {
      wKg = Number(weight) * 0.453592; // lb → kg
    }

    if (hMeters > 0 && wKg > 0) {
      const bmi = wKg / (hMeters * hMeters);

      // ✅ Healthy weight range (kg) for the given height
      const minWeight = (18.5 * hMeters * hMeters).toFixed(1);
      const maxWeight = (24.9 * hMeters * hMeters).toFixed(1);

      let category = "";
      let color = "text-white";

      if (bmi < 18.5) {
        category = "Underweight";
        color = "text-blue-400";
      } else if (bmi < 25) {
        category = "Normal";
        color = "text-green-400";
      } else if (bmi < 30) {
        category = "Overweight";
        color = "text-yellow-400";
      } else {
        category = "Obese";
        color = "text-red-400";
      }

      setResult({
        bmi: bmi.toFixed(1),
        category,
        color,
        healthyRange: "18.5 - 24.9 kg/m²",
        healthyWeight: `${minWeight} kg - ${maxWeight} kg`,
      });
    }
  };

  return (
    <div className="py-10 text-black flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-purple-300/20">
        <h1 className="text-3xl font-bold text-center mb-10 text-white">
          BMI Calculator
        </h1>

        {/* Height */}
        <label className="block mb-2 text-purple-100">Height</label>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            placeholder={heightUnit === "ft" ? "Feet" : "cm"}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 rounded-lg border bg-white/70"
          />
          {heightUnit === "ft" && (
            <input
              type="number"
              placeholder="Inches"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              className="w-full p-2 rounded-lg border bg-white/70"
            />
          )}
          <select
            value={heightUnit}
            onChange={(e) => {
              setHeight("");
              setInches("");
              setHeightUnit(e.target.value);
            }}
            className="p-2 rounded-lg border bg-white/70"
          >
            <option value="ft">ft + in</option>
            <option value="cm">cm</option>
          </select>
        </div>

        {/* Weight */}
        <label className="block mb-2 text-purple-100">Weight</label>
        <div className="flex gap-2 mb-6">
          <input
            type="number"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 rounded-lg border bg-white/70"
          />
          <select
            value={weightUnit}
            onChange={(e) => {
              setWeight("");
              setWeightUnit(e.target.value);
            }}
            className="p-2 rounded-lg border bg-white/70"
          >
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </div>

        {/* Button */}
        <button
          onClick={calculateBMI}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Calculate BMI
        </button>

        {/* Result Card */}
        {result && (
          <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-purple-500/30 via-indigo-500/30 to-purple-700/30 border border-purple-200/20 shadow-lg text-center">
            <h2 className={`text-3xl font-bold mt-1 mb-3 ${result.color}`}>
              {result.category}
            </h2>
            <p className="text-lg font-semibold text-white">
              BMI = {result.bmi} kg/m²
            </p>
            <p className="text-sm text-purple-100 mt-2">
              Healthy BMI Range: {result.healthyRange}
            </p>
            <p className="text-sm text-purple-100 mt-1">
              Healthy Weight Range: {result.healthyWeight}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
