import React, { useState } from "react";
import { Calendar } from "lucide-react";

// 🔹 Reusable Custom Dropdown Component
const CustomDropdown = ({ options, value, onChange, label, disabled }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center min-w-[120px]">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative w-32">
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setOpen(!open)}
          className={`w-full p-3 border rounded-lg flex justify-between items-center bg-white 
            ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-gray-300 shadow-sm"}
          `}
        >
          {value || `Select ${label}`}
          <span className="text-gray-500">▼</span>
        </button>

        {open && (
          <ul className="absolute z-10 mt-1 max-h-40 overflow-y-auto bg-white border rounded-lg shadow-lg w-full">
            {options.map((opt) => (
              <li
                key={opt}
                className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const DateInputSection = ({
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
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const years = Array.from({ length: 100 }, (_, i) => 2024 - i);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleDatePickerChange = (e) => {
    setBirthDate(e.target.value);
    setUseManualInput(false);
  };

  return (
    <div className="space-y-6">
      {/* Date Picker */}
      <div
        onClick={() => useManualInput && setUseManualInput(false)}
        className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 ${
          useManualInput ? "opacity-50 cursor-pointer hover:opacity-70" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Calendar className="w-5 h-5 inline mr-2" />
            Select Your Birth Date (Date Picker)
          </label>
          <input
            type="date"
            value={useManualInput ? "" : birthDate}
            onChange={handleDatePickerChange}
            disabled={useManualInput}
            className={`p-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 
              focus:border-transparent bg-white transition-all duration-200 text-center 
              font-medium text-lg 
              ${
                useManualInput
                  ? "border-gray-200 cursor-not-allowed opacity-50"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md cursor-pointer"
              }`}
            max={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>

      {/* OR Divider */}
      <div className="flex items-center justify-center">
        <div className="border-t border-gray-300 flex-grow"></div>
        <span className="px-4 text-gray-500 font-medium">OR</span>
        <div className="border-t border-gray-300 flex-grow"></div>
      </div>

      {/* Manual Input */}
      <div
        onClick={() => !useManualInput && setUseManualInput(true)}
        className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 ${
          !useManualInput ? "opacity-50 cursor-pointer hover:opacity-70" : "opacity-100"
        }`}
      >
        <p className="text-center text-sm font-medium text-gray-700 mb-4">Enter Manually</p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <CustomDropdown
            options={years}
            value={birthYear}
            onChange={setBirthYear}
            label="Year"
            disabled={!useManualInput}
          />

          <CustomDropdown
            options={months}
            value={birthMonth}
            onChange={setBirthMonth}
            label="Month"
            disabled={!useManualInput}
          />

          <CustomDropdown
            options={days}
            value={birthDay}
            onChange={setBirthDay}
            label="Day"
            disabled={!useManualInput}
          />
        </div>
      </div>
    </div>
  );
};

export default DateInputSection;
