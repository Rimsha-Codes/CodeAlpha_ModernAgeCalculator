import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, User, Heart, TrendingUp, Bed, Baby, GraduationCap, Briefcase, Gift, Clock } from 'lucide-react';

const NextBirthdayCard = ({ age }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Next Birthday</p>
          <p className="text-xl font-bold text-gray-800">{age.nextBirthday}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Countdown</p>
          <p className="text-xl font-bold text-gray-800">{age.daysUntilBirthday} days remaining</p>
        </div>
      </div>
    </div>
  );
};
export default NextBirthdayCard;
