export const navbarExpand = () => {
    
    const navbarExpandButton = document.getElementById('navbar-button')
    if (navbarExpandButton.textContent === "☰") {
        navbarExpandButton.textContent = 'x';
    } else {
        navbarExpandButton.textContent = "☰";
    }
    navbarExpandButton.addEventListener('click', () => {
        const navbarButtonLi = document.getElementById('button-li')
        navbarButtonLi.style.display = (navbarButtonLi.style.display == 'none' ? 'block' : 'none')
    })

}