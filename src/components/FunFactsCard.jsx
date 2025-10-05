
import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, User, Heart, TrendingUp, Bed, Baby, GraduationCap, Briefcase, Gift, Clock } from 'lucide-react';

const FunFactsCard = ({ age }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
      <div className="flex items-center space-x-2 mb-6">
        <Gift className="w-6 h-6" />
        <h2 className="text-2xl font-bold text-gray-800">Fun Facts About Your Age</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
          <div className="flex items-start space-x-3">
            <TrendingUp className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="text-sm text-gray-700">
                You've lived through approximately <span className="font-bold">{age.lifespanPercentage}%</span> of the average human lifespan (79 years).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
          <div className="flex items-start space-x-3">
            <Heart className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="text-sm text-gray-700">
                Your heart has beaten about <span className="font-bold">{age.heartbeats} times</span> (assuming 80 beats per minute).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
          <div className="flex items-start space-x-3">
            <User className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="text-sm text-gray-700">
                You've taken roughly <span className="font-bold">{age.steps} steps</span> (assuming 10,000 steps per day).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
          <div className="flex items-start space-x-3">
            <Bed className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="text-sm text-gray-700">
                You've slept about <span className="font-bold">{age.sleepYears} years</span> (assuming 8 hours per night).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunFactsCard;