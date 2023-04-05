import { React } from "react";
import "./Info.css";

const Info = props => {
    return <>
        <div className="p-4 p-xxl-5" id="info">
            <h1 className="display-3">
                Work Session Pacer
                <button type="button" className="btn btn-dark ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-circle-info"></i>
                </button>
            </h1>
            <p className="fs-4">Improve your focus with Pomodoro method!</p>
            <p className="fs-5">This app will help you manage your work/study sessions by alternating a long focus timer, with a short break timer. Select the timer length and start working now!</p>
        </div>
        {props.children}
    </>
}

export default Info;