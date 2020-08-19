import "./styles/index.scss";
import "./styles/navbar.scss";
import "./styles/search.scss";
import { navbarExpand } from './scripts/navbar'
import { testSearch } from './scripts/search'


document.addEventListener('DOMContentLoaded', () => {
    navbarExpand()
    testSearch()



})