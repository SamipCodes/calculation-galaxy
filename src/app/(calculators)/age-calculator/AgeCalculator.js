"use client";
import { useState, useEffect } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [refDate, setRefDate] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const today = new Date();
    setRefDate(formatDate(today));
  }, []);

  const formatDate = (date) => {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    return `${y}-${m}-${d}`;
  };

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const reference = refDate ? new Date(refDate) : new Date();

    if (reference < birthDate) {
      setResult({ error: "Reference date cannot be before date of birth." });
      return;
    }

    let years = reference.getFullYear() - birthDate.getFullYear();
    let months = reference.getMonth() - birthDate.getMonth();
    let days = reference.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(
        reference.getFullYear(),
        reference.getMonth(),
        0
      ).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    // Next Birthday from reference date
    let nextBirthday = new Date(
      reference.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );
    if (nextBirthday < reference) {
      nextBirthday.setFullYear(reference.getFullYear() + 1);
    }
    const diffTime = nextBirthday - reference;
    const daysToBirthday = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setResult({
      years,
      months,
      days,
      daysToBirthday,
    });
  };

  return (
    <div className="py-10 text-black flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-purple-300/20">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-200">
          Age Calculator
        </h1>

        {/* DOB */}
        <label className="block mb-2 text-purple-100">Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-2 mb-4 rounded-lg border bg-white/70"
        />

        {/* Reference Date */}
        <label className="block mb-2 text-purple-100">Age at the Date of</label>
        <input
          type="date"
          value={refDate}
          onChange={(e) => setRefDate(e.target.value)}
          className="w-full p-2 mb-6 rounded-lg border bg-white/70"
        />

        {/* Button */}
        <button
          onClick={calculateAge}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Calculate Age
        </button>

        {/* Result */}
        {result && !result.error && (
          <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-purple-500/30 via-indigo-500/30 to-purple-700/30 border border-purple-200/20 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-3">Your Age</h2>
            <p className="text-lg font-semibold text-white">
              {result.years} Years, {result.months} Months, {result.days} Days
            </p>
            <p className="text-sm text-purple-100 mt-2">
              Days until next birthday: {result.daysToBirthday}
            </p>
          </div>
        )}

        {result?.error && (
          <p className="mt-4 text-red-400 font-semibold text-center">
            {result.error}
          </p>
        )}
      </div>
    </div>
  );
}
