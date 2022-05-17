import './main.css';
import App from './modules/app.js';
import preloader from './assets/preloader.gif';

const imgsect = document.querySelector('.img');
const img = new Image();
img.src = preloader;

imgsect.appendChild(img);
// load data to the document
document.addEventListener('DOMContentLoaded', () => {
  // get api data
  App.displayData();
});