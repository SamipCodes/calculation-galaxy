export const metadata = {
  title: "BMI Calculator - Check Your Body Mass Index | Calculation Galaxy",
  description:
    "Free BMI Calculator online. Enter your weight and height to check your Body Mass Index (BMI) and see if you're underweight, normal, overweight, or obese.",
  openGraph: {
    title: "BMI Calculator - Calculation Galaxy",
    description:
      "Use our free BMI calculator to quickly find your Body Mass Index (BMI) and learn about your health category.",
    url: "https://calculationgalaxy.com/bmi",
    siteName: "Calculation Galaxy",
    images: [
      {
        url: "https://calculationgalaxy.com/images/bmi-calculator.png",
        width: 1200,
        height: 630,
        alt: "BMI Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import BMICalculator from "./BMICalculator";

export default function BMICalculatorPage() {
  return (
    <div className="bg-[#4c1d95] p-6 text-white">
      <BMICalculator />
      <section className="mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">What is BMI?</h2>
        <p className="mb-4">
          Body Mass Index (BMI) is a simple calculation that estimates whether
          your weight is in a healthy range for your height. It is widely used
          as a quick screening tool to identify potential weight categories such
          as underweight, normal weight, overweight, or obesity.
        </p>

        <h3 className="text-xl font-semibold mb-2">How is BMI Calculated?</h3>
        <p className="mb-4">
          BMI is calculated using the formula:{" "}
          <span className="font-semibold">weight (kg) ÷ [height (m)]²</span>.
          This means both your height and weight need to be converted into
          metric units before applying the formula.
        </p>

        <h3 className="text-xl font-semibold mb-2">BMI Categories</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <span className="text-blue-300 font-semibold">Underweight:</span>{" "}
            Below 18.5
          </li>
          <li>
            <span className="text-green-300 font-semibold">Normal:</span> 18.5 –
            24.9
          </li>
          <li>
            <span className="text-orange-300 font-semibold">Overweight:</span>{" "}
            25 – 29.9
          </li>
          <li>
            <span className="text-red-400 font-semibold">Obese:</span> 30 or
            above
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Why is BMI Important?</h3>
        <p className="mb-4">
          While BMI does not directly measure body fat, it provides a quick
          indication of whether your weight may increase the risk of health
          conditions such as diabetes, heart disease, and high blood pressure.
          It should be used as a general guide rather than a precise diagnosis.
        </p>

        <h3 className="text-xl font-semibold mb-2">Limitations of BMI</h3>
        <p>
          BMI does not take into account muscle mass, bone density, age, sex, or
          ethnicity. Athletes or individuals with higher muscle mass may have a
          higher BMI without excess body fat. For a complete health assessment,
          consult a healthcare professional.
        </p>
      </section>
    </div>
  );
}
