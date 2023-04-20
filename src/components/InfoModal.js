import "./InfoModal.css";

const InfoModal = () => {
    return <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header bg-dark">
                    <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">App Info</h1>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body py-4 px-2">
                    <p id="info-text-modal" className="fs-6">This app will help you manage your work/study sessions by alternating a long focus timer, with a short break timer. Select the timer length and start working now!</p>
                    <p className="fs-6 mb-1">This app was developed by <a style={{ color: "black" }} href="https://marcellodeidda.github.io/" target="_blank">Marcello Deidda</a>, using React.js. Sound effects are not available on Safari browser. Credit for the pictures go to <a style={{ color: "black" }} href="https://unsplash.com/@talesbyjen" target="_blank">Jen P.</a> and <a style={{ color: "black" }} href="https://unsplash.com/@andriklangfield" target="_blank">Andrik Langfield</a>.</p>
                </div>
            </div>
        </div>
    </div>
}

export default InfoModal;