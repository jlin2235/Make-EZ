function closeModal(event) { //CLOSES MODAL WHEN OUTSIDE DOCUMENT IS CLICKED
    const MODAL = document.getElementById('instructionModal');
    debugger
    if (event.target == MODAL) {
        MODAL.style.display = "none";
    }
}

const openModal = () => { //OPENS MODAL WHEN INSTRUCTION BUTTON IS CLICKED
    debugger
    const MODAL = document.getElementById('instructionModal');
    MODAL.style.display = "block";
}

export const aboutmodal = () => {
    debugger
    const about = document.getElementById('about');
    about.addEventListener("click", ()=>{
        debugger
        openModal();
    })
}
export const closemodal = () => {
    debugger
    const instructionModal = document.getElementById('instructionModal');
    instructionModal.addEventListener("click", ()=>{
        debugger
        closeModal(event);
    })
}



