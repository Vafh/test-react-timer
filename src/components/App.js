import React, { useRef, useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMins, setTimerMins] = useState('00')
  const [timerSecs, setTimerSecs]= useState('00')

  let interval = useRef()
  const startTimer = () => {
    const count = new Date("Sep 5, 2021 00:00:00").getTime()
    interval = setInterval(() => {
      const now = Date.now()
      const distans =  now - count
      const renderDays = Math.floor(distans / (1000 * 60 * 60 * 24));
      const renderHours = Math.floor(
        (distans % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const renderMins = Math.floor((distans % (1000 * 60 * 60)) / (1000 * 60));
      const renderSecs = Math.floor((distans % (1000 * 60)) / 1000);
      if (distans < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDays(renderDays)
        setTimerHours(renderHours)
        setTimerMins(renderMins)
        setTimerSecs(renderSecs)
      }
    }, 1000)
    
  }
useEffect(() => {
  startTimer();
  return () => {
    clearInterval(interval.current)
  }
})

  return (
    <>
      <div className='container'>
      <div className="timer" id="timer-1">
            <div className="field">
                <span className="value" data-value="days">{timerDays}</span>
                <span className="label">Days</span>
            </div>
        
            <div className="field">
                <span className="value" data-value="hours">{timerHours}</span>
                <span className="label">Hours</span>
            </div>
        
            <div className="field">
                <span className="value" data-value="mins">{timerMins}</span>
                <span className="label">Minutes</span>
            </div>
        
            <div className="field">
                <span className="value" data-value="secs">{timerSecs}</span>
                <span className="label">Seconds</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default App;
