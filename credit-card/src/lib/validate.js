export default function Validate(num) {
  function numCharacters(num) {
    const input = num.toString().length;

    if (input === 16) {
      return true;
    } else {
      return false;
    }
  }

  // All characters must be numbers
  function checkNumber(num) {
    let regEx = '^[0-9]+$';

    if (num.match(regEx)) {
      return true;
    } else {
      return false;
    }
  }

  // At least two different numbers should be represented
  function twoDifferentNumbers(num) {
    for (let i = 1; i < num.length; i++) {
      if (num[0] !== num[i]) return true;
    }
    return false;
  }

  // The last number must be even
  function lastNumIsEven(num) {
    const lastDigit = num % 10;
    //   console.log('The last digit of ', num, ' is ', lastDigit);
    if (lastDigit % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  // The sum of all the numbers must be greater than 16
  function sum(num) {
    let sumOfNumbers = 0;

    for (let i = 0; i < num.length; i++) {
      sumOfNumbers += parseInt(num[i]);
    }

    if (sumOfNumbers > 16) {
      return true;
    } else {
      return false;
    }
  }

  const answers = [];

  if (
    numCharacters(num) &&
    checkNumber(num) &&
    twoDifferentNumbers(num) &&
    lastNumIsEven(num) &&
    sum(num) === true
  ) {
    answers.push('your number is valid');
  } else {
    if (numCharacters(num) === false) {
      answers.push('Input must be 16 characters');
    }

    if (checkNumber(num) === false) {
      answers.push('All characters must be numbers');
    }

    if (twoDifferentNumbers(num) === false) {
      answers.push('At least two different numbers should be represented');
    }

    if (lastNumIsEven(num) === false) {
      answers.push('The last number must be even');
    }

    if (sum(num) === false) {
      answers.push('The sum of all the numbers must be greater than 16');
    }
  }
  return answers;
}
