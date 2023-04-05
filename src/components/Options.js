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

    const audioButton = props.audioOn ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>;
    const audioButtonClass = `btn btn-${!props.audioOn ? "outline-" : ""}primary col-2`

    return <>
        <form onSubmit={props.onSessionSwitch} className="row px-1 w-25">
            <div className="mb-3 px-1 col-12">
                <label forhtml="focus-timer" className="form-label">Focus Timer</label>
                <input onChange={focusTimerChangeHandler} type="number" id="focus-timer" min={1} max={60} value={Math.floor(props.timers.focusTimer / 60)} className="form-control" />
            </div>
            <div className="mb-3 px-1 col-12">
                <label forhtml="break-timer" className="form-label">Break Timer</label>
                <input onChange={breakTimerChangeHandler} type="number" id="break-timer" min={1} max={60} value={Math.floor(props.timers.breakTimer / 60)} className="form-control" />
            </div>
            <div className="btn-group" role="group">
                <button type="submit" className="btn btn-outline-dark col-10">START SESSION</button>
                <button className={audioButtonClass} onClick={props.onAudioToggle}>{audioButton}</button>
            </div>
        </form>
    </>
}

export default Options;