const InfoModal = () => {
    return <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">App Info</h1>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body py-4">
                <p class="fs-6 mb-1 text-center">This app was developed by <a style={{color: "black"}} href="https://marcellodeidda.github.io/" target="_blank">Marcello Deidda</a>, using React.js.</p>
                <p class="fs-6 mb-1 text-center">Credit for the pictures go to <a style={{color: "black"}} href="https://unsplash.com/@talesbyjen" target="_blank">Jen P.</a> and <a style={{color: "black"}} href="https://unsplash.com/@andriklangfield" target="_blank">Andrik Langfield</a>.</p>
            </div>
        </div>
    </div>
</div>
}

export default InfoModal;