module.exports = function toReadable(number) {
  let num = number;

  if (num > 999) {
    throw new Error('Number should be less than 999');
  }
  if (num === 0) {
    return 'zero';
  }

  const unit = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const ten = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let result = '';

  const hundredsDigit = Math.floor(num / 100);
  if (hundredsDigit > 0) {
    result += `${unit[hundredsDigit]} hundred`;
    num %= 100;

    if (num > 0) {
      result += ' ';
    }
  }

  if (num > 0) {
    if (num < 10) {
      result += unit[num];
    } else if (num >= 10 && num < 20) {
      result += teen[num - 10];
    } else {
      const tensDigit = Math.floor(num / 10);
      const unitsDigit = num % 10;

      result += ten[tensDigit];

      if (unitsDigit > 0) {
        result += ` ${unit[unitsDigit]}`;
      }
    }
  }

  return result;
};
