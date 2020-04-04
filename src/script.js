
const keyCodes = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const engKeys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift ',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→',
];
const engCapsKeys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift ',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→',
];
const engShiftKeys = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', '|', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift ',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→',
];

const ruKeys = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift ',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→',
];
const ruCapsKeys = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift ',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→',
];
const ruShiftKeys = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', '/', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift ',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→',
];

const longKeys = [
  'Tab', 'Backspace', 'Enter', 'Caps Lock', 'Shift',
];
const specialKeys = [
  'Tab', 'Backspace', 'Enter', 'Caps Lock', 'Shift', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'CapsLock', 'Delete', 'MetaLeft', 'MetaRight', 'ShiftLeft', 'ShiftRight',
];

let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'eng';
let isShiftClicked = false;
let isCapsLockClicked = false;

const body = document.querySelector('body');
const inputField = document.createElement('textarea', 'input-field');
inputField.classList.add('input-field');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
body.append(inputField);
body.append(keyboard);


const changeLangState = (language) => localStorage.setItem('lang', language);

const addKeys = (keys) => {
  keys.forEach((keyValue, index) => {
    const key = document.createElement('div');
    key.classList.add('key');
    key.setAttribute('code', keyCodes[index]);
    if (longKeys.includes(keyValue)) key.classList.add('special-key');
    if (keyCodes[index] === 'Space') key.classList.add('space');
    key.append(keyValue);
    keyboard.append(key);
  });
};

const changeKeys = (keyValues) => {
  const keys = keyboard.querySelectorAll('.key');
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].textContent = keyValues[i];
  }
};

function eventHandler(event, type) {
  const keys = document.querySelectorAll('.key');
  let eventCode;
  switch (type) {
    case 'mousedown':
    case 'mouseup':
      if (event.target.classList.contains('key')) { eventCode = event.target.getAttribute('code'); } else return;
      break;
    case 'keydown':
    case 'keyup':
      eventCode = event.code;
      break;
    default:
  }
  if (!keyCodes.includes(eventCode)) return;
  inputField.focus();
  event.preventDefault();
  if (type === 'keydown' || type === 'mousedown') {
    keys.forEach((elem) => {
      if (eventCode === elem.getAttribute('code')) {
        if (type === 'keydown') { elem.classList.add('key--active'); }
        if (!specialKeys.includes(eventCode)) {
          inputField.setRangeText(elem.textContent, inputField.selectionStart, inputField.selectionEnd, 'end');
        }
      }
    });

    switch (eventCode) {
      case 'CapsLock':
        if (event.repeat) return;
        isCapsLockClicked = !isCapsLockClicked;
        if (isCapsLockClicked) {
          keyboard.querySelector("div[code='CapsLock']").classList.add('key--active');

          if (isShiftClicked) {
            changeKeys(lang === 'eng' ? engShiftKeys : ruShiftKeys); // ??????????????????????????????????
          } else {
            changeKeys(lang === 'eng' ? engCapsKeys : ruCapsKeys);
          }
        } else {
          keyboard.querySelector("div[code='CapsLock']").classList.remove('key--active');
          changeKeys(lang === 'eng' ? engKeys : ruKeys);
        }
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        isShiftClicked = !isShiftClicked;
        if (isShiftClicked) {
          if (isCapsLockClicked) {
            changeKeys(lang === 'eng' ? engKeys : ruKeys);
          } else {
            changeKeys(lang === 'eng' ? engShiftKeys : ruShiftKeys);
          }
        }
        break;

      case 'Backspace':
        if (inputField.selectionStart - 1 >= 0) { inputField.setRangeText('', inputField.selectionStart - 1, inputField.selectionEnd, 'end'); }
        break;
      case 'Delete':
        if (inputField.selectionEnd + 1 <= inputField.value.length) { inputField.setRangeText('', inputField.selectionStart, inputField.selectionEnd + 1, 'end'); }
        break;
      case 'Enter':
        inputField.setRangeText('\n', inputField.selectionStart, inputField.selectionEnd, 'end');
        break;
      case 'Tab':
        inputField.setRangeText('  ', inputField.selectionStart, inputField.selectionEnd, 'end');
        break;
      default:
    }

    if (event.ctrlKey && event.altKey) {
      lang = lang === 'eng' ? 'ru' : 'eng';
      changeLangState(lang);
      if (isCapsLockClicked) {
        changeKeys(lang === 'eng' ? engCapsKeys : ruCapsKeys);
      } else {
        changeKeys(lang === 'eng' ? engKeys : ruKeys);
      }
    }
  } else if (type === 'keyup' || type === 'mouseup') {
    keys.forEach((elem) => {
      if (eventCode === elem.getAttribute('code') && eventCode !== 'CapsLock') {
        elem.classList.remove('key--active');
      }
    });

    switch (eventCode) {
      case 'ShiftLeft':
      case 'ShiftRight':
        isShiftClicked = !isShiftClicked;
        if (!isShiftClicked) {
          if (isCapsLockClicked) {
            changeKeys(lang === 'eng' ? engCapsKeys : ruCapsKeys);
          } else {
            changeKeys(lang === 'eng' ? engKeys : ruKeys);
          }
        }
        break;
      case 'CapsLock':
        break;
      default:
    }
  }
}

document.addEventListener('keydown', (event) => {
  eventHandler(event, 'keydown');
});


document.addEventListener('keyup', (event) => {
  eventHandler(event, 'keyup');
});


keyboard.addEventListener('mousedown', (event) => {
  eventHandler(event, 'mousedown');
});


keyboard.addEventListener('mouseup', (event) => {
  eventHandler(event, 'mouseup');
});


addKeys(lang === 'eng' ? engKeys : ruKeys);
