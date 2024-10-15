import data from "./data.js";
import {linkData} from "./link.js";

let but = document.getElementById('btntest');
but.addEventListener('click', linkData);

export default but;