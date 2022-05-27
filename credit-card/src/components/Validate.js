// import React from 'react';
// import Check from './Check';

const Validate = ({ input }) => {
  // Input must be 16 characters
  function numCharacters(input) {
    // eslint-disable-next-line
    if (input.length == 16) {
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
  function twoDifferentNumbers(input) {
    for (let i = 1; i < input.length; i++) {
      if (input[0] !== input[i]) return true;
    }
    return false;
  }

  // The last number must be even
  function lastNumIsEven(input) {
    const lastDigit = input % 10;
    // eslint-disable-next-line
    if (lastDigit % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

  // The sum of all the numbers must be greater than 16
  function sum(input) {
    let sumOfNumbers = 0;

    for (let i = 0; i < input.length; i++) {
      sumOfNumbers += parseInt(input[i]);
    }

    if (sumOfNumbers > 16) {
      return true;
    } else {
      return false;
    }
  }

  const answers = [];
  if (
    numCharacters(input) &&
    checkNumber(input) &&
    twoDifferentNumbers(input) &&
    lastNumIsEven(input) &&
    sum(input) === true
  ) {
    answers.push('Your number is valid');
  } else {
    if (numCharacters(input) === false) {
      answers.push('Input must be 16 characters');
    }

    if (checkNumber(input) === false) {
      answers.push('All characters must be numbers');
    }

    if (twoDifferentNumbers(input) === false) {
      answers.push('At least two different numbers should be represented');
    }
    if (lastNumIsEven(input) === false) {
      answers.push('The last number must be even');
    }
    if (sum(input) === false) {
      answers.push('The sum of all the numbers must be greater than 16');
    }
  }
  console.log(answers);

  return <div></div>;
};

export default Validate;
