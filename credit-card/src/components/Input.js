import React, { useState } from 'react';
import Validate from './Validate';

const Input = () => {
  const [input, setInput] = useState([]);

  return (
    <div>
      <Validate input={input} />
    </div>
  );
};

export default Input;
