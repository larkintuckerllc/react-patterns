var generateName = require('sillyname');
var hello = require('./hello');
require('./index.css'); // ADDED FOR CSS
var icon = require('./icon.png'); // ADDED FOR IMAGE

var name = generateName();
var counterEl = document.getElementById('counter');
var incrementEl = document.getElementById('increment');
var iconEl = document.getElementById('icon');
incrementEl.addEventListener('click', function() {
  counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + 1).toString();
});
hello();
window.console.log(name);
iconEl.src = icon; // ADDED FOR IMAGE
