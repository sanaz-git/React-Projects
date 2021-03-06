import React, { useState } from 'react';
import chip from '../images/chip.png';
import logo from '../images/logo.png';
import Validate from '../lib/validate';
import { Errors } from './Errors';

const Input = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState();

  const validation = () => {
    setMessages(Validate(input));
  };

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
            onClick={validation}
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
      <Errors messages={messages} />
    </div>
  );
};

export default Input;
