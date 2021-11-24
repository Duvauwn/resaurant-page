import loadPage from './load.js';

const display = document.querySelector('#content');

display.appendChild(loadPage().header);
display.appendChild(loadPage().headline);
display.appendChild(loadPage().myFood);