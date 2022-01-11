module.exports = function toReadable (number) {
  let stringNumber = '';
  let hundreds = Math.floor(number / 100);
  let tens = Math.floor(number % 100 / 10);
  let digits = number % 10;
  let flag = false;
  if (hundreds > 0) {
    switch (hundreds) {
      case 1: stringNumber += 'one'; break;
      case 2: stringNumber += 'two'; break;
      case 3: stringNumber += 'three'; break;
      case 4: stringNumber += 'four'; break;
      case 5: stringNumber += 'five'; break;
      case 6: stringNumber += 'six'; break;
      case 7: stringNumber += 'seven'; break;
      case 8: stringNumber += 'eight'; break;
      case 9: stringNumber += 'nine'; break;
    }
    stringNumber += ' hundred';
    flag = true;
  }
  if (tens > 0) {
    if (flag) {
      stringNumber += ' ';
    }
    if (tens === 1) {
      let teens = number % 100;
      switch (teens) {
        case 10: stringNumber += 'ten'; break;
        case 11: stringNumber += 'eleven'; break;
        case 12: stringNumber += 'twelve'; break;
        case 13: stringNumber += 'thirteen'; break;
        case 14: stringNumber += 'fourteen'; break;
        case 15: stringNumber += 'fifteen'; break;
        case 16: stringNumber += 'sixteen'; break;
        case 17: stringNumber += 'seventeen'; break;
        case 18: stringNumber += 'eighteen'; break;
        case 19: stringNumber += 'nineteen'; break;
      }
    } else {
      switch (tens) {
        case 2: stringNumber += 'twenty'; break;
        case 3: stringNumber += 'thirty'; break;
        case 4: stringNumber += 'forty'; break;
        case 5: stringNumber += 'fifty'; break;
        case 6: stringNumber += 'sixty'; break;
        case 7: stringNumber += 'seventy'; break;
        case 8: stringNumber += 'eighty'; break;
        case 9: stringNumber += 'ninety'; break;
      }
      flag = true;
    }
  }
  if (digits > 0 && tens !== 1) {
    if (flag) {
      stringNumber += ' ';
    }
    switch (digits) {
      case 1: stringNumber += 'one'; break;
      case 2: stringNumber += 'two'; break;
      case 3: stringNumber += 'three'; break;
      case 4: stringNumber += 'four'; break;
      case 5: stringNumber += 'five'; break;
      case 6: stringNumber += 'six'; break;
      case 7: stringNumber += 'seven'; break;
      case 8: stringNumber += 'eight'; break;
      case 9: stringNumber += 'nine'; break;
    }
  }
  return number === 0 ? 'zero' : stringNumber;
}
