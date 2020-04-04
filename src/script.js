
const keyCodes = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const engKeys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl',
];
const engCapsKeys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl',
];
const engShiftKeys = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl',
];

const engShiftCapsKeys = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl',
];

const ruKeys = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl',
];
const ruCapsKeys = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl',
];
const ruShiftKeys = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl',
];

const ruShiftCapsKeys = [
  'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl',
];

const longKeys = [
  'Backspace', 'Enter', 'Caps Lock', 'Shift',
];
const specialKeys = [
  'Tab', 'Backspace', 'Enter', 'Caps Lock', 'Shift', 'Alt', 'Ctrl', 'Caps Lock', 'Del', 'Win', 'Shift', '←', '↓', '↑', '→',
];

const specialKeysCodes = [
  'Tab', 'Backspace', 'Enter', 'Caps Lock', 'Shift', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'CapsLock', 'Delete', 'MetaLeft', 'MetaRight', 'ShiftLeft', 'ShiftRight',
];

let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'eng';
let isShiftClicked = false;
let isCapsLockClicked = false;

const changeLangState = (language) => localStorage.setItem('lang', language);

const createDOM = () => {
  const body = document.querySelector('body');
  const inputField = document.createElement('textarea', 'input-field');
  inputField.classList.add('input-field');
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const systemDescription = document.createElement('p');
  systemDescription.classList.add('system-description');
  systemDescription.textContent = 'Клавиатура создана в операционной системе Windows';
  const languageDescription = document.createElement('p');
  languageDescription.classList.add('language-description');
  languageDescription.textContent = 'Для переключения языка используйте комбинацию левыe ctrl + alt';
  body.append(inputField);
  body.append(keyboard);
  body.append(systemDescription);
  body.append(languageDescription);
};

const addKeys = (keys) => {
  const keyboard = document.querySelector('.keyboard');
  keys.forEach((keyValue, index) => {
    const key = document.createElement('div');
    key.classList.add('keyboard__key');
    key.setAttribute('code', keyCodes[index]);
    if (!specialKeys.includes(keyValue)) key.classList.add('key-letter');
    if (longKeys.includes(keyValue)) key.classList.add('key-special');
    if (keyCodes[index] === 'Space') key.classList.add('space');
    key.append(keyValue);
    keyboard.append(key);
  });
};

const changeKeys = (keyValues) => {
  const keyboard = document.querySelector('.keyboard');
  const keys = keyboard.querySelectorAll('.keyboard__key');
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].textContent = keyValues[i];
  }
};

const eventHandler = (event, type) => {
  const keyboard = document.querySelector('.keyboard');
  const inputField = document.querySelector('.input-field');
  inputField.focus();
  event.preventDefault();
  const keys = document.querySelectorAll('.keyboard__key');
  let eventCode;
  switch (type) {
    case 'mousedown':
    case 'mouseup':
      if (event.target.classList.contains('keyboard__key')) { eventCode = event.target.getAttribute('code'); } else return;
      break;
    case 'keydown':
    case 'keyup':
      if (!keyCodes.includes(event.code)) return;
      eventCode = event.code;
      break;
    default:
  }

  if (type === 'keydown' || type === 'mousedown') {
    const currentKey = keyboard.querySelector(`div[code=${eventCode}]`);
    if (type === 'keydown') { currentKey.classList.add('keyboard__key--active'); }
    if (!specialKeysCodes.includes(eventCode)) {
      inputField.setRangeText(currentKey.textContent, inputField.selectionStart, inputField.selectionEnd, 'end');
    }

    switch (eventCode) {
      case 'CapsLock':
        if (event.repeat) return;
        isCapsLockClicked = !isCapsLockClicked;
        if (isCapsLockClicked) {
          keyboard.querySelector("div[code='CapsLock']").classList.add('keyboard__key--active');

          if (isShiftClicked) {
            changeKeys(lang === 'eng' ? engShiftCapsKeys : ruShiftCapsKeys);
          } else {
            changeKeys(lang === 'eng' ? engCapsKeys : ruCapsKeys);
          }
        } else {
          keyboard.querySelector("div[code='CapsLock']").classList.remove('keyboard__key--active');
          if (isShiftClicked) changeKeys(lang === 'eng' ? engShiftKeys : ruShiftKeys);
          else changeKeys(lang === 'eng' ? engKeys : ruKeys);
        }
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        if (event.repeat) return;
        isShiftClicked = !isShiftClicked;
        if (isShiftClicked) {
          if (isCapsLockClicked) {
            changeKeys(lang === 'eng' ? engShiftCapsKeys : ruShiftCapsKeys);
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
        if (isShiftClicked) {
          changeKeys(lang === 'eng' ? engShiftCapsKeys : ruShiftCapsKeys);
        } else {
          changeKeys(lang === 'eng' ? engCapsKeys : ruCapsKeys);
        }
      } else if (isShiftClicked) {
        changeKeys(lang === 'eng' ? engShiftKeys : ruShiftKeys);
      } else {
        changeKeys(lang === 'eng' ? engKeys : ruKeys);
      }
    }
  } else if (type === 'keyup' || type === 'mouseup') {
    keys.forEach((elem) => {
      if (eventCode === elem.getAttribute('code') && eventCode !== 'CapsLock') {
        elem.classList.remove('keyboard__key--active');
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
};

const addListeners = () => {
  const keyboard = document.querySelector('.keyboard');
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
};

createDOM();
addKeys(lang === 'eng' ? engKeys : ruKeys);
addListeners();
