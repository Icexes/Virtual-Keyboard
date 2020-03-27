const body = document.querySelector('body');

const createElement = (tagName, classNames, src, alt) => {
  const elem = document.createElement(tagName);
  if (classNames) {
    for (const className of classNames.split(',')) {
      elem.classList.add(className.replace(/\s/g, ''));
    }
  }
  if (src) {
    elem.src = src;
  }
  if (alt) {
    elem.alt = alt;
  }
  return elem;
};

const inputField = createElement('textarea', 'input-field');
body.append(inputField);

const keyboard = createElement('div', 'keyboard');
body.append(keyboard);

const engKeys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
  ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift '],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Ctrl', '←', '↓', '→'],
];
const longKeys = [
  'Tab', 'Backspace', 'Enter', 'Caps Lock', 'Shift',
];

// for (const row of engKeys) {
//   for (const textKey of row);
//   const key = createElement('div', 'key');

// }

engKeys.forEach((row) => {
  row.forEach((keyValue) => {
    const key = createElement('div', 'key');
    if (longKeys.includes(keyValue)) key.classList.add('special-key');
    if (keyValue === 'Space') key.classList.add('space');
    key.append(keyValue);
    keyboard.append(key);
  });
});
