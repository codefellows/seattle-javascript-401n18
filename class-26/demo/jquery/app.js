'use strict';

// words, wordsInput, clicker

// application state
let wordsTyped = '';

$('#wordsInput').on('change', handleChangedInput);
$('#clicker').on('click', handleClick);

function handleChangedInput() {
  wordsTyped = $(this).val();
}

function handleClick(event) {
  event.preventDefault();
  $('#words').text(wordsTyped);
}
