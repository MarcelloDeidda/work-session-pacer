import { React } from "react";

const Options = props => {
    // This fuction will update the focus timer if the value is between 1 and 60
    const focusTimerChangeHandler = e => {
        props.onTimerChange(prevState => {
            return {
                ...prevState,
                focusTimer: e.target.value > 60 || e.target.value < 1 ? prevState.focusTimer : e.target.value * 60
            }
        });
    }

    // This fuction will update the break timer if the value is between 1 and 60
    const breakTimerChangeHandler = e => {
        props.onTimerChange(prevState => {
            return {
                ...prevState,
                breakTimer: e.target.value > 60 || e.target.value < 1 ? prevState.breakTimer : e.target.value * 60
            }
        });
    }

    return <>
        <form onSubmit={props.onSessionSwitch}>
            <div>
                <label forHTML="focus-timer">Focus Timer</label>
                <input onChange ={focusTimerChangeHandler} type="number" id="focus-timer" min={1} max={60} value={Math.floor(props.timers.focusTimer / 60 )} />
            </div>
            <div>
                <label forHTML="break-timer">Break Timer</label>
                <input onChange ={breakTimerChangeHandler} type="number" id="break-timer" min={1} max={60} value={Math.floor(props.timers.breakTimer / 60 )} />
            </div>
            <button type="submit">START SESSION</button>
        </form>
    </>
}

export default Options;