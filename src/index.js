import './index.css';
import addUser from './modules/AddUser.js';

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
  addUser();
});