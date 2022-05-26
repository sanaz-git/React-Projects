import React, { useState } from 'react';
import chip from '../chip.png';
import logo from '../logo.png';

const Input = () => {
  const [input, setInput] = useState('');

  // useEffect(() => {}, [input]);

  // Input must be 16 characters
  function numCharacters(input) {
    // eslint-disable-next-line
    if (input.length == 16) {
      return true;
    } else {
      return false;
    }
  }

  // // All characters must be numbers
  function checkNumber(input) {
    let regEx = '^[0-9]+$';

    if (input.match(regEx)) {
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
    // eslint-disable-next-line
    for (let i = 0; i < input.length; i++) {
      sumOfNumbers += parseInt(input[i]);
    }

    if (sumOfNumbers > 16) {
      return true;
    } else {
      return false;
    }
  }

  function validateCreditNumber() {
    const answers = [];
    // eslint-disable-next-line
    if (
      numCharacters(input) &&
      checkNumber(input) &&
      twoDifferentNumbers(input) &&
      lastNumIsEven(input) &&
      sum(input) === true
    ) {
      answers.push('your number is valid');
    } else {
      // eslint-disable-next-line
      if (numCharacters(input) == false) {
        answers.push('Input must be 16 characters');
      }
      // eslint-disable-next-line
      if (checkNumber(input) == false) {
        answers.push('All characters must be numbers');
      }
      // eslint-disable-next-line
      if (twoDifferentNumbers(input) == false) {
        answers.push('At least two different numbers should be represented');
      }
      // eslint-disable-next-line
      if (lastNumIsEven(input) == false) {
        answers.push('The last number must be even');
      }
      // eslint-disable-next-line
      if (sum(input) == false) {
        answers.push('The sum of all the numbers must be greater than 16');
      }
    }
    const x = answers.join('\n');
    console.log(x);
  }

  return (
    <div>
      <div className="card">
        <div className="img">
          <img
            className="img1"
            src={chip}
            alt="chip"
            height="40px"
            width="40px"
          />
          <img
            className="img2"
            src={logo}
            alt="logo"
            height="40px"
            width="40px"
          />
        </div>
        <div className="creditNumber">
          <input
            type="text"
            value={input}
            className="credit"
            placeholder="Enter Credit number"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn1"
            name="subject"
            type="submit"
            value="HTML"
            onClick={validateCreditNumber}
          >
            validate
          </button>
        </div>
        <div className="specifications">
          <div className="holder">
            <h2>CARD HOLDER</h2>
            <span>JOHN DOE</span>
          </div>
          <div className="expire">
            <h2>EXPIRES</h2>
            <span>10/25</span>
          </div>
        </div>
      </div>

      <validateCreditNumber input={input} />
    </div>
  );
};

export default Input;
