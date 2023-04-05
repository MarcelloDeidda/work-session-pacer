import { React, useState } from "react";
import Timer from "./Timer";

const root = document.getElementById("root");

const StudySection = props => {
    const [focusMode, setFocusMode] = useState(true);
    const [timerOn, setTimerOn] = useState(true);

    // This function will toggle focus/break mode
    const modeToggleHandler = () => {
        root.style.opacity = "0";
        setTimeout(() => {
            setTimerOn(false);
            setFocusMode(prevState => !prevState);
            root.style.opacity = "1";
            setTimerOn(true);
        }, 1000);
    }

    // This function will toggle timer on/off
    const timerToggleHandler = () => {
        setTimerOn(prevState => !prevState);
    }

    if (focusMode) {
        return <>
            <div id="focus-background"></div>
            <Timer
                focusMode={focusMode}
                timers={props.timers}
                onModeToggle={modeToggleHandler}
                onTimerChange={timerToggleHandler}
                onSessionSwitch={props.onSessionSwitch}
                timerOn={timerOn}
            />
        </>
    } else {
        return <>
            <Timer
                focusMode={focusMode}
                timers={props.timers}
                onModeToggle={modeToggleHandler}
                onTimerChange={timerToggleHandler}
                onSessionSwitch={props.onSessionSwitch}
                timerOn={timerOn}
            />
            <div id="break-background"></div>
        </>
    }
}

export default StudySection;