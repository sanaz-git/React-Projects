import React, { useState } from 'react';
import Validate from './Validate';

const Input = () => {
  const [input, setInput] = useState([]);

  return (
    <div>
      <Validate input={input} />
      <div className="card">
        <div className="img">
          <img
            className="img2"
            src="./public/assets/chip.png"
            alt="chip"
            height="40px"
            width="40px"
          />
          <img
            className="img2"
            src="./public/assets/logo.png"
            alt="logo"
            height="40px"
            width="40px"
          />
        </div>
        <div className="creditNumber">
          <input
            type="text"
            value=""
            id="credit"
            placeholder="Enter Credit number"
          />
          <button id="btn1" name="subject" type="submit" value="HTML">
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
    </div>
  );
};

export default Input;
