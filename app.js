let DEFAULT_PALETTE_LIST = [
  'red',
  'blue',
  'green',
  'yellow',
  'black',
  'orange',
];



function makeGrid() {
for (let i = 0; i < 64; i++) {
    let divCell = $('<div class="cell">');
      $('.grid').append(divCell);
}
}

function makeButton(color) {
  let button = $('<button>');
    button.css('background-color', color);
      $('.palette').append(button);
      $('.palette button').click(onPaletteClick);
}

function makePalette() {
for (let index = 0; index < DEFAULT_PALETTE_LIST.length; index = index + 1) {
    const nextColor = DEFAULT_PALETTE_LIST[index];
      makeButton(nextColor);
}
$('.palette button').first().addClass('active');
}
makeGrid();
makePalette();

function addColor(event) {
  event.preventDefault();
  const newColor = $('input').val();
  makeButton(newColor);
}
$('#newColor').submit(addColor);

function onPaletteClick() {
    $('.palette button').removeClass('active');
    $(this).addClass('active');
}

$('.palette button').click(onPaletteClick);

function onGridClick() {
  let activebg = $('.active').css('background-color');
      if ($(this).css('background-color') === activebg) {
        $(this).css('background-color', 'rgba(0, 0, 0, 0)');
      } else {
        $(this).css('background-color', activebg);
      }
}
$('.cell').click(onGridClick);

function onClearClick() {
  $('.cell').css('background-color', '');
}
$('.controls .clear').click(onClearClick);

function onFillAllClick() {
let activebg = $('.active').css('background-color');
  $('.cell').css('background-color', activebg);
}
$('.controls .fill-all').click(onFillAllClick);

function onFillEmptyClick() {
  const elements = $('.cell');
  let activebg = $('.active').css('background-color');
  for (let i = 0; i < elements.length; i++) {
    let nextElement = $( elements[i] );
      if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
        nextElement.css('background-color', activebg);
    }
  }
}
$('.controls .fill-empty').click(onFillEmptyClick);



