import './main.css';
import App from './modules/app.js';
import preloader from './assets/preloader.gif';
import Likes from './modules/likes.js';
import Comments from './modules/comments.js';

const imgsect = document.querySelector('.img');
const img = new Image();
img.src = preloader;

imgsect.appendChild(img);
// load data to the document
document.addEventListener('DOMContentLoaded', () => {
  // get api data
  App.displayData();
  // post likes
  Likes.postData();
  // post comments
  Comments.postComments();
});