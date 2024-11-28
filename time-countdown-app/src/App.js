import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [currentTime, setCurrentTime] = useState('');
    const [countdown, setCountdown] = useState(10);
    const [isCounting, setIsCounting] = useState(false);

    // Function to fetch current system time
    const fetchCurrentTime = () => {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString());
    };

    // Function to start countdown
    const startCountdown = () => {
        setIsCounting(true);
        setCountdown(10);
    };

    useEffect(() => {
        let timer;
        if (isCounting && countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            setIsCounting(false);
        }
        return () => clearInterval(timer);
    }, [isCounting, countdown]);

    return (
        <div className="container">
            <h1>System Time Fetch and Countdown Application</h1>
            <button onClick={fetchCurrentTime}>Fetch Current Time</button>
            <div id="timeDisplay">{currentTime}</div>
            
            <button onClick={startCountdown}>Start Countdown (10 seconds)</button>
            <div id="countdownDisplay">{isCounting ? countdown : 'Countdown finished!'}</div>
        </div>
    );
}

export default App;
