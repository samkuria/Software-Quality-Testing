import React, { useState, useEffect } from 'react';
import ReportsUI from '../components/Reports';

function ReportsPage() {
  // Mocking the data flow - SQA: This allows UI testing before backend is ready
  const [dailyData] = useState([
    { time: '08:00', temp: 36.5, heartRate: 72 },
    { time: '10:00', temp: 37.1, heartRate: 85 },
    { time: '12:00', temp: 38.2, heartRate: 110 },
    { time: '14:00', temp: 37.5, heartRate: 95 },
    { time: '16:00', temp: 36.8, heartRate: 78 },
  ]);

  const [weeklyData] = useState([
    { day: 'Mon', avgTemp: 36.6, avgHR: 75 },
    { day: 'Tue', avgTemp: 37.0, avgHR: 80 },
    { day: 'Wed', avgTemp: 36.4, avgHR: 72 },
    { day: 'Thu', avgTemp: 37.8, avgHR: 92 },
    { day: 'Fri', avgTemp: 36.7, avgHR: 74 },
  ]);

  const [alerts] = useState([
    { date: 'Mar 24', time: '12:05 PM', message: 'High Heart Rate (110 BPM)' },
    { date: 'Mar 23', time: '09:15 AM', message: 'High Temp Alert (38.2°C)' }
  ]);

  return (
    <div className="reports-page-container">
      <ReportsUI 
        dailyData={dailyData} 
        weeklyData={weeklyData} 
        alerts={alerts} 
      />
    </div>
  );
}

export default ReportsPage;
