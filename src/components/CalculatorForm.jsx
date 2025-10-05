import React from "react";
import { Calendar } from "lucide-react";
import MonthDropdown from "./MonthDropdown"; // 👈 import new component

const CalculatorForm = ({
  onCalculate,
  birthDate,
  setBirthDate,
  birthYear,
  setBirthYear,
  birthMonth,
  setBirthMonth,
  birthDay,
  setBirthDay,
  useManualInput,
  setUseManualInput,
}) => {
  const getCurrentDate = () =>
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      {/* Header */}
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <Calendar className="text-blue-500" /> <span>Age Calculator</span>
        </h2>
        <div>
          <div className="text-sm text-gray-500">Today:</div>
          <div className="font-semibold">{getCurrentDate()}</div>
        </div>
      </div>

      {/* Toggle Input Mode */}
      <div className="mb-6 flex justify-center">
        <button
          type="button"
          onClick={() => setUseManualInput(false)}
          className={`px-4 py-2 rounded-l-lg border ${
            !useManualInput
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Use Date Picker
        </button>
        <button
          type="button"
          onClick={() => setUseManualInput(true)}
          className={`px-4 py-2 rounded-r-lg border ${
            useManualInput
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Enter Manually
        </button>
      </div>

      {/* Date Input */}
      {!useManualInput ? (
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Select Birth Date:
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Day Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Day
            </label>
            <input
              type="number"
              min="1"
              max="31"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Animated Cute Month Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Month
            </label>
            <MonthDropdown birthMonth={birthMonth} setBirthMonth={setBirthMonth} />
          </div>

          {/* Year Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Year
            </label>
            <input
              type="number"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* Calculate Button */}
      <button
        onClick={onCalculate}
        className="w-full mt-6 bg-green-500 hover:bg-green-600 
                   text-white py-4 rounded-lg font-semibold text-lg
                   transition duration-200 ease-in-out transform hover:scale-[1.01]"
      >
        <Calendar className="w-5 h-5 inline mr-2" />
        Calculate Age
      </button>
    </div>
  );
};

export default CalculatorForm;
