import React, { useState, useEffect } from "react";
import {
  User,
  Heart,
  Clock,
  Baby,
  GraduationCap,
  Briefcase,
} from "lucide-react";

import HeroSection from "./HeroSection";
import CalculatorForm from "./CalculatorForm";
import AgeAnalysisCard from "./AgeAnalysisCard";
import LifeMilestonesCard from "./LifeMilestonesCard";
import FunFactsCard from "./FunFactsCard";
import NextBirthdayCard from "./NextBirthdayCard";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("2000-01-15");
  const [birthYear, setBirthYear] = useState("2000");
  const [birthMonth, setBirthMonth] = useState("January");
  const [birthDay, setBirthDay] = useState("15");
  const [age, setAge] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [useManualInput, setUseManualInput] = useState(false);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const calculateAge = () => {
    let birth;
    if (useManualInput) {
      const monthIndex = months.indexOf(birthMonth);
      birth = new Date(parseInt(birthYear), monthIndex, parseInt(birthDay));
    } else {
      birth = new Date(birthDate);
    }

    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let monthsCalc = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      monthsCalc--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (monthsCalc < 0) {
      years--;
      monthsCalc += 12;
    }

    const totalDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24));
    const totalMonths = years * 12 + monthsCalc;
    const weeks = Math.floor(totalDays / 7);
    const hours = totalDays * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;

    const milestones = [
      { icon: Baby, title: "First Steps", description: "Most babies take their first steps around this time.", date: new Date(birth.getFullYear() + 1, birth.getMonth(), birth.getDate()), achieved: years >= 1 },
      { icon: GraduationCap, title: "Started School", description: "The beginning of your educational journey.", date: new Date(birth.getFullYear() + 5, birth.getMonth(), birth.getDate()), achieved: years >= 5 },
      { icon: User, title: "Teenager", description: "Welcome to the teenage years!", date: new Date(birth.getFullYear() + 13, birth.getMonth(), birth.getDate()), achieved: years >= 13 },
      { icon: GraduationCap, title: "High School Grad", description: "Congratulations on completing high school.", date: new Date(birth.getFullYear() + 18, birth.getMonth(), birth.getDate()), achieved: years >= 18 },
      { icon: Briefcase, title: "Legal Adult", description: "Full legal adulthood in most countries.", date: new Date(birth.getFullYear() + 21, birth.getMonth(), birth.getDate()), achieved: years >= 21 },
      { icon: Heart, title: "Quarter Life", description: "A quarter century of life experiences.", date: new Date(birth.getFullYear() + 25, birth.getMonth(), birth.getDate()), achieved: years >= 25 }
    ];

    let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < today) {
      nextBirthday = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
    }
    const daysUntilBirthday = Math.floor((nextBirthday - today) / (1000 * 60 * 60 * 24));

    const lifespanPercentage = ((years / 79) * 100).toFixed(2);
    const heartbeats = (totalDays * 24 * 60 * 80).toLocaleString();
    const steps = (totalDays * 10000).toLocaleString();
    const sleepYears = (years * 0.33).toFixed(1);

    setAge({
      years, months: monthsCalc, days, totalMonths, totalDays, weeks,
      hours, minutes, seconds, milestones,
      nextBirthday: nextBirthday.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
      daysUntilBirthday, lifespanPercentage, heartbeats, steps, sleepYears
    });

    setShowResults(true);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setAge(null);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* ✅ Hero Section always visible */}
      <HeroSection isVisible={isVisible} />

      <div id="calculator" className="max-w-4xl mx-auto px-4 py-12">
        {!showResults ? (
          <>
            <CalculatorForm 
              onCalculate={calculateAge}
              birthDate={birthDate}
              setBirthDate={setBirthDate}
              birthYear={birthYear}
              setBirthYear={setBirthYear}
              birthMonth={birthMonth}
              setBirthMonth={setBirthMonth}
              birthDay={birthDay}
              setBirthDay={setBirthDay}
              useManualInput={useManualInput}
              setUseManualInput={setUseManualInput}
            />
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                  Age Calculator?
                </span>
              </h2>
            </div>
          </>
        ) : (
          <div className="animate-fadeIn space-y-6">
            <AgeAnalysisCard age={age} />
            <LifeMilestonesCard milestones={age.milestones} />
            <FunFactsCard age={age} />
            <NextBirthdayCard age={age} />
            
            <button
              onClick={resetCalculator}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Clock className="w-5 h-5" />
              <span>Calculate Another Age</span>
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
      `}</style>
    </div>
  );
};

export default AgeCalculator;
