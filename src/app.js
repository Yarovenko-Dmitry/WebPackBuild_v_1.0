
console.log(123);

var divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
document.body.append(divWrapper);

const textArea = document.createElement('textarea');
textArea.className = 'textarea';
divWrapper.append(textArea);

const divKeyboard = document.createElement('div');
divKeyboard.className = 'keyboard';
divWrapper.append(divKeyboard);

const divRow1 = document.createElement('div');
divRow1.className = 'row1';
divKeyboard.append(divRow1);

const divRow2 = document.createElement('div');
divRow2.className = 'row2';
divKeyboard.append(divRow2);

const divRow3 = document.createElement('div');
divRow3.className = 'row3';
divKeyboard.append(divRow3);

const divRow4 = document.createElement('div');
divRow4.className = 'row4';
divKeyboard.append(divRow4);

const divRow5 = document.createElement('div');
divRow5.className = 'row5';
divKeyboard.append(divRow5);

const pDescriptionText = document.createElement('p');
pDescriptionText.className = 'description-text';
divWrapper.append(pDescriptionText);
pDescriptionText.innerText = 'Switch language - Left Shift + Left Ctrl';

const keySmallEn = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
  ['capsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
  ['shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '←', '↓', '→'],
];

const keyBigEn = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'],
  ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '`', 'ENTER' ],
  ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const keyShiftEn = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\'', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const keySmallRu = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
  ['capsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
  ['shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '←', '↓', '→'],
];

const keyBigRu = [
  ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'DEL'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER'],
  ['Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const keyShiftRu = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const dataCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const keyPressed = new Set();

let localStorageLanguageFlag = localStorage.getItem('language');
// console.log(localStorageLanguageFlag);

const checkLanguage = () => {
  if (localStorageLanguageFlag === null) {
    return 'smallEn';
  } else {
    return localStorage.getItem('language');
  }
};

let languageFlag = checkLanguage();

window.onload = function() {
  textArea.focus();
};

document.addEventListener('mouseup', () => {
  textArea.focus();
});

// let keyValue = keySmallEn;
// let keyValue = keyBigEn;
// let keyValue = keyShiftEn;
// let keyValue = keySmallRu;
// let keyValue = keyBigRu;
// let keyValue = keyShiftRu;

// let languageFlag = smallEn;
// let languageFlag = bigEn;
// let languageFlag = shiftEn;
// let languageFlag = smallRu;
// let languageFlag = bigRu;
// let languageFlag = shiftRu;

const rows = Array.from(divKeyboard.children);

const deleteKeyboardLayoutKeys = () => {
  rows.forEach((el) => {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  });
};

const changeKeyboardLayout = (keyValue) => {
  for (let j = 0; j < keyValue.length; j++) {
    for (let i = 0; i < keyValue[j].length; i++) {
      const divKey = document.createElement('div');
      divKey.className = 'key';
      if ((j === 0 && i === 13)
        || (j === 2 && i === 0)
        || (j === 2 && i === 12)
        || (j === 2 && i === 12)
        || (j === 3 && i === 0)
        || (j === 4 && i === 0)
        || (j === 4 && i === 5)) {
        divKey.className = 'key keyBiggerSize';
      }

      if (j === 4 && i === 3) {
        divKey.className = 'key space';
      }

      divKey.setAttribute('data-code', dataCode[j][i]);
      divKey.innerText = keyValue[j][i];

      if (j === 0) {
        divRow1.append(divKey);
      } else if (j === 1) {
        divRow2.append(divKey);
      } else if (j === 2) {
        divRow3.append(divKey);
      } else if (j === 3) {
        divRow4.append(divKey);
      } else if (j === 4) {
        divRow5.append(divKey);
      }
    }
  }
};

const changeKeyboard = () => {
  languageFlag = checkLanguage();
  switch (languageFlag) {
    case 'smallEn':
      changeKeyboardLayout(keySmallEn);
      break;
    case 'bigEn':
      changeKeyboardLayout(keyBigEn);
      break;
      case 'shiftEn':
    changeKeyboardLayout(keyShiftEn);
    break;
    case 'smallRu':
    changeKeyboardLayout(keySmallRu);
    break;
    case 'bigRu':
    changeKeyboardLayout(keyBigRu);
    break;
    case 'shiftRu':
    changeKeyboardLayout(keyShiftRu);
    break;
  }
};

changeKeyboard();

document.addEventListener('keydown', (event) => {
  let pressKey = document.querySelector(`div[data-code = ${event.code}]`);
  pressKey.classList.add('press-key');
  // console.log(event.code);
  keyPressed.add(event.code);
  languageFlag = checkLanguage();

  if (keyPressed.has('ShiftLeft')) {
    if (languageFlag === 'smallEn') {
      deleteKeyboardLayoutKeys();
      changeKeyboardLayout(keyShiftEn);
      pressKey = document.querySelector(`div[data-code = ${event.code}]`);
      pressKey.classList.add('press-key');
      languageFlag = 'shiftEn';
      localStorage.setItem('language', 'shiftEn');
      // console.log('смена ShiftLeft английский');
    } else if (languageFlag === 'smallRu') {
      deleteKeyboardLayoutKeys();
      changeKeyboardLayout(keyShiftRu);
      pressKey = document.querySelector(`div[data-code = ${event.code}]`);
      pressKey.classList.add('press-key');
      languageFlag = 'shiftRu';
      localStorage.setItem('language', 'shiftRu');
      // console.log('смена ShiftLeft русский');
    }
  }

  if ((keyPressed.has('ShiftLeft')) && (keyPressed.has('ControlLeft'))) {
    // console.log('сменя языка');
    deleteKeyboardLayoutKeys();
    if ((languageFlag === 'smallEn') || (languageFlag === 'bigEn') || (languageFlag === 'shiftEn')) {
      changeKeyboardLayout(keySmallRu);
      languageFlag = 'smallRu';
      localStorage.setItem('language', 'smallRu');
      // console.log('сменя языка на русский');
    } else {
      changeKeyboardLayout(keySmallEn);
      languageFlag = 'smallEn';
      localStorage.setItem('language', 'smallEn');
      // console.log('сменя языка на английский');
    }
  }

  if (keyPressed.has('CapsLock') && ((languageFlag === 'smallEn') || (languageFlag === 'smallRu'))) {
    languageFlag = checkLanguage();
    // languageFlag = 'smallEn';
    if ((languageFlag === 'smallEn') || (languageFlag === 'shiftEn')) {
      deleteKeyboardLayoutKeys();
      changeKeyboardLayout(keyBigEn);
      pressKey = document.querySelector(`div[data-code = ${event.code}]`);
      pressKey.classList.add('press-key');
      languageFlag = 'bigEn';
      localStorage.setItem('language', 'bigEn');
      // console.log('смена CapsLock английский');
    } else if ((languageFlag === 'smallRu') || (languageFlag === 'shiftRu')) {
      deleteKeyboardLayoutKeys();
      changeKeyboardLayout(keyBigRu);
      pressKey = document.querySelector(`div[data-code = ${event.code}]`);
      pressKey.classList.add('press-key');
      languageFlag = 'bigRu';
      localStorage.setItem('language', 'bigRu');
      // console.log('смена CapsLock русский');
    }
  } else if (keyPressed.has('CapsLock') && ((languageFlag === 'bigEn') || (languageFlag === 'bigRu'))) {
    languageFlag = checkLanguage();
    // languageFlag = 'smallEn';
    if (languageFlag === 'bigEn') {
      deleteKeyboardLayoutKeys();
      changeKeyboardLayout(keySmallEn);
      pressKey = document.querySelector(`div[data-code = ${event.code}]`);
      pressKey.classList.add('press-key');
      localStorage.setItem('language', 'smallEn');
      // console.log('отмена CapsLock английский');
    } else if (languageFlag === 'bigRu') {
      deleteKeyboardLayoutKeys();
      changeKeyboardLayout(keySmallRu);
      pressKey = document.querySelector(`div[data-code = ${event.code}]`);
      pressKey.classList.add('press-key');
      languageFlag = 'smallRu';
      localStorage.setItem('language', 'smallRu');
      // console.log('отмена CapsLock русский');
    }
  }
});

document.addEventListener('keyup', (event) => {
  let unPressKey = document.querySelector(`div[data-code = ${event.code}]`);
  unPressKey.classList.add('press-key');
  keyPressed.add(event.code);

  if (keyPressed.has('ShiftLeft')) {
    if (languageFlag === 'shiftEn') {
      deleteKeyboardLayoutKeys();
      changeKeyboardLayout(keySmallEn);
      unPressKey = document.querySelector(`div[data-code = ${event.code}]`);
      unPressKey.classList.add('press-key');
      languageFlag = 'smallEn';
      localStorage.setItem('language', 'smallEn');
      // console.log('СБРОС ShiftLeft английский');
    } else if (languageFlag === 'shiftRu') {
      deleteKeyboardLayoutKeys();
      changeKeyboardLayout(keySmallRu);
      sdfunPressKey = document.querySelector(`div[data-code = ${event.code}]`);
      unPressKey.classList.add('press-key');
      languageFlag = 'smallRu';
      localStorage.setItem('language', 'smallRu');
      // console.log('СБРОС ShiftLeft русский');
    }
  }

  unPressKey.classList.remove('press-key');
  keyPressed.clear();
});
