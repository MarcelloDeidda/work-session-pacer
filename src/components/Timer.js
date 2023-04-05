import { React, useState, useEffect } from "react";

const Timer = props => {
    const [secondsLeft, setSecondsLeft] = useState(props.timers.focusTimer);

    useEffect(() => {
        let interval = null;

        if (secondsLeft === 0 & props.timerOn) {
            props.onModeToggle();
            return;
        } else if (props.timerOn) {
            interval = setInterval(() => {
                setSecondsLeft(prevState => prevState - 10);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [props.timerOn, secondsLeft]);

    useEffect(() => {
        setSecondsLeft(props.focusMode ? props.timers.focusTimer : props.timers.breakTimer);
    }, [props.focusMode]);

    let timerMinutes = Math.floor(secondsLeft / 60);
    let timerSeconds = secondsLeft % 60;

    const title = `Time to ${props.focusMode ? "focus" : "rest"}!`
    const subtitle = props.focusMode ? "Turn off notifications and focus. Don't forget to drink water regularly." : "Stand up, do some stretching, make yourself some tea and relax."
    
    return <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p id="timer-display">{timerMinutes < 10 ? "0" : ""}{timerMinutes}:{timerSeconds < 10 ? "0" : ""}{timerSeconds}</p>
        <div>
            <button onClick={props.onTimerChange}>{props.timerOn ? "PAUSE" : "START"}</button>
            <button onClick={props.onSessionSwitch}>STOP SESSION</button>
        </div>
    </div>

}

export default Timer;