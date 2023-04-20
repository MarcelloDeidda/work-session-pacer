import { React, useState, useEffect } from "react";
import "./Timer.css";

const Timer = props => {
    const [secondsLeft, setSecondsLeft] = useState(props.timers.focusTimer);

    useEffect(() => {
        let interval = null;

        if (secondsLeft <= 0 & props.timerOn) {
            props.onModeToggle();
            return;
        } else if (props.timerOn) {
            const now = Date.now();
            const end = now + secondsLeft * 1000;
            
            interval = setInterval(() => {
                setSecondsLeft(Math.round((end - Date.now()) / 1000));
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

    const audioButton = props.audioOn ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>;
    const audioButtonClass = `btn btn-${!props.audioOn ? "outline-" : ""}dark col-2`

    const pauseButtonClass = `btn btn-${props.timerOn ? "outline-" : ""}dark col-6`;
    const stopButtonClass = `btn btn-outline-${props.focusMode ? "danger" : "success"} col-6`;
    const backgroundClass = !props.timerOn ? "pauseTimer" : props.focusMode ? "focusTimer" : "breakTimer";
    const lowTimerClass = (timerMinutes === 0 && timerSeconds <= 5) ? (props.focusMode ? "text-danger" : "text-success") : "";

    return <div className={"d-flex flex-column justify-content-center align-items-center " + backgroundClass} id="timer-section">
        <p className="fs-1">{title}</p>
        <p className="fs-5 text-center">{subtitle}</p>
        <p className={"display-1 " + lowTimerClass} id="timer-display">{timerMinutes < 10 ? "0" : ""}{timerMinutes}:{timerSeconds < 10 ? "0" : ""}{timerSeconds}</p>
        <div className="btn-group col-12 px-5" role="group">
            <button className={pauseButtonClass} onClick={props.onTimerChange}>{props.timerOn ? "PAUSE" : "START"}</button>
            <button className={stopButtonClass} onClick={props.onSessionSwitch}>STOP SESSION</button>
            <button className={audioButtonClass} onClick={props.onAudioToggle}>{audioButton}</button>
        </div>
        <audio src="./assets/clong.mp3" autoPlay></audio>
    </div>
}

export default Timer;