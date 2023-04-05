import { React } from "react";

const Info = props => {
    return <>
        <div>
            <h1>
                Work Session Pacer
                <button type="button" class="btn btn-dark ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">i</button>
            </h1>
            <p>Improve your focus with Pomodoro method!</p>
            <p>This app will help you manage your work/study sessions by alternating a long focus timer, with a short break timer. Select the timer length and start working now!</p>
        </div>
        {props.children}
    </>
}

export default Info;