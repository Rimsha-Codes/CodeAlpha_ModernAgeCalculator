import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, User, Heart, TrendingUp, Bed, Baby, GraduationCap, Briefcase, Gift, Clock } from 'lucide-react';
const LifeMilestonesCard = ({ milestones }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="w-6 h-6" />
        <h2 className="text-2xl font-bold text-gray-800">Your Life Milestones</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          return (
            <div 
              key={index}
              className={`rounded-xl p-5 border-l-4 ${
                milestone.achieved 
                  ? 'bg-green-50 border-green-500' 
                  : 'bg-gray-50 border-gray-300'
              } transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center space-x-2 mb-3">
                <Icon className="w-5 h-5" />
                <h3 className="font-bold text-gray-800">{milestone.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">{milestone.description}</p>
              <p className="text-xs text-gray-500">
                {milestone.achieved ? 'Achieved:' : 'Coming:'} {milestone.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default LifeMilestonesCard;
