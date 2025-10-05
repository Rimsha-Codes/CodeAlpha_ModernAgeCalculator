import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const MonthDropdown = ({ birthMonth, setBirthMonth }) => {
  const [open, setOpen] = useState(false);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  return (
    <div className="relative">
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border rounded-lg px-3 py-2 text-sm bg-white shadow-sm 
                   flex justify-between items-center 
                   focus:outline-none focus:ring-2 focus:ring-blue-400
                   transition duration-200 hover:scale-[1.02]"
      >
        {birthMonth || "Select Month"}
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {/* Dropdown list */}
      {open && (
        <ul
          className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-10
                     max-h-40 overflow-y-auto text-sm animate-scaleIn"
        >
          {months.map((month) => (
            <li
              key={month}
              onClick={() => {
                setBirthMonth(month);
                setOpen(false);
              }}
              className={`px-3 py-2 cursor-pointer hover:bg-blue-100 transition 
                         ${birthMonth === month ? "bg-blue-50 font-semibold" : ""}`}
            >
              {month}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MonthDropdown;
