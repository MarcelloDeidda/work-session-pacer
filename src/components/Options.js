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
        <div>
            <h1>
                Work Session Pacer
                <button type="button" class="btn btn-dark ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">i</button>
            </h1>
            <p>Improve your focus with Pomodoro method!</p>
            <p>This app will help you manage your work/study sessions by alternating a long focus timer, with a short break timer. Select the timer length and start working now!</p>
        </div>
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
        {props.children}
    </>
}

export default Options;