import React, { useEffect, useState } from 'react';
// import './countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const eventDate = new Date('2024-11-09T06:30:00Z');

    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = eventDate - now;

      if (timeDiff <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="progress-container">
        <svg className="progress-ring" width="120" height="120" viewBox="0 0 120 120">
          <circle className="progress-ring__circle progress-ring__background" cx="60" cy="60" r="50" />
          <circle className="progress-ring__circle progress-ring__bar" cx="60" cy="60" r="50" />
          <text x="60" y="65" textAnchor="middle" transform="rotate(90, 60, 60)" className="progress-text">
            {timeLeft.days}
          </text>
        </svg>
        <p>Days</p>
      </div>
      <div className="progress-container">
        <svg className="progress-ring" width="120" height="120" viewBox="0 0 120 120">
          <circle className="progress-ring__circle progress-ring__background" cx="60" cy="60" r="50" />
          <circle className="progress-ring__circle progress-ring__bar" cx="60" cy="60" r="50" />
          <text x="60" y="65" textAnchor="middle" transform="rotate(90, 60, 60)" className="progress-text">
            {timeLeft.hours}
          </text>
        </svg>
        <p>Hours</p>
      </div>
      <div className="progress-container">
        <svg className="progress-ring" width="120" height="120" viewBox="0 0 120 120">
          <circle className="progress-ring__circle progress-ring__background" cx="60" cy="60" r="50" />
          <circle className="progress-ring__circle progress-ring__bar" cx="60" cy="60" r="50" />
          <text x="60" y="65" textAnchor="middle" transform="rotate(90, 60, 60)" className="progress-text">
            {timeLeft.minutes}
          </text>
        </svg>
        <p>Minutes</p>
      </div>
      <div className="progress-container">
        <svg className="progress-ring" width="120" height="120" viewBox="0 0 120 120">
          <circle className="progress-ring__circle progress-ring__background" cx="60" cy="60" r="50" />
          <circle className="progress-ring__circle progress-ring__bar" cx="60" cy="60" r="50" />
          <text x="60" y="65" textAnchor="middle" transform="rotate(90, 60, 60)" className="progress-text">
            {timeLeft.seconds}
          </text>
        </svg>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
