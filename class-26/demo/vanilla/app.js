'use strict';

// words, wordsInput, clicker

// get input element
const button = document.getElementById('clicker');
const input = document.getElementById('wordsInput');
const output = document.getElementById('words');

// application state
let wordsTyped = '';

input.addEventListener('change', (event) => {
  // NOTE: event.target is the thing that made this happen
  wordsTyped = event.target.value;
});

// when the button is clicked (click event)
// read the text from input
button.addEventListener('click', (event) => {
  event.preventDefault();
  output.textContent = wordsTyped;
});

// Update the text content of the #words with what we read
