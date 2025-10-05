import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, User, Heart, TrendingUp, Bed, Baby, GraduationCap, Briefcase, Gift, Clock } from 'lucide-react';
const AgeAnalysisCard = ({ age }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
      <div className="flex items-center space-x-2 mb-6">
        <User className="w-6 h-6" />
        <h2 className="text-2xl font-bold text-gray-800">Your Age Analysis</h2>
      </div>

      {/* Main Age Display */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-6">
        <p className="text-center text-gray-600 mb-2">You are</p>
        <div className="flex items-center justify-center space-x-4 text-center">
          <div>
            <span className="text-5xl font-bold text-blue-500">{age.years}</span>
            <span className="text-xl text-gray-600 ml-2">years</span>
          </div>
          <div>
            <span className="text-5xl font-bold text-blue-500">{age.months}</span>
            <span className="text-xl text-gray-600 ml-2">months</span>
          </div>
          <div>
            <span className="text-5xl font-bold text-blue-500">{age.days}</span>
            <span className="text-xl text-gray-600 ml-2">days</span>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-2">old</p>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Months</p>
          <p className="text-2xl font-bold text-gray-800">{age.totalMonths}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Days</p>
          <p className="text-2xl font-bold text-gray-800">{age.totalDays.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Weeks</p>
          <p className="text-2xl font-bold text-gray-800">{age.weeks.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Hours</p>
          <p className="text-2xl font-bold text-gray-800">{age.hours.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Minutes</p>
          <p className="text-2xl font-bold text-gray-800">{age.minutes.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Seconds</p>
          <p className="text-2xl font-bold text-gray-800">{age.seconds.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
export default AgeAnalysisCard;
