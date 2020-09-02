import "./styles/index.scss";
import "./styles/navbar.scss";
import "./styles/search.scss";
import { navbarExpand } from './scripts/navbar'
import { enterSearch, buttonSearch } from './scripts/search'
import { aboutmodal, closemodal } from './scripts/modal'


document.addEventListener('DOMContentLoaded', () => {
    navbarExpand();
    buttonSearch();
    enterSearch();
    aboutmodal();
    closemodal();

    // document.onclick = function (evt) {
    //     debugger
    //     var evt = window.event || evt; // window.event for IE
    //     if (!evt.target) evt.target = evt.srcElement; // extend target property for IE
    //     alert(evt.target); // target is clicked
    // }

})