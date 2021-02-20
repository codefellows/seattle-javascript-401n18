let state = {};

let source = document.getElementById('stuff-template').innerHTML;
let template = Handlebars.compile(source);
$('#clicker').on('click', handleClick);
$('#wordsInput').on('change', handleWords);

function handleWords() {
  state.words = $(this).val();
}

function handleClick(event) {
  event.preventDefault();
  state.words = state.words
    .split('')
    .reverse()
    .join('');

  render();
}

function init() {
  state.words = 'nothing to see here';
  render();
}

function render() {
  $('#stuff').html(template(state));
}

$(function() {
  init();
});
