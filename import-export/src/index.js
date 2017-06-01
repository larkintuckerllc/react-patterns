import generateName from 'sillyname';
import hello from './hello';
import './index.css';
import icon from './icon.png';

const name = generateName();
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const iconEl = document.getElementById('icon');
incrementEl.addEventListener('click', () => counterEl.innerHTML
  = (parseInt(counterEl.innerHTML, 10) + 1).toString()
);
hello();
window.console.log(name);
iconEl.src = icon;
