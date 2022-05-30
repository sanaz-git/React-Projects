import React from 'react';
import validate from '../lib/validate';

export const Errors = (answers) => {
  validate();
  return (
    <div>
      <ul className="ul">
        {answers.map((answer) => (
          <li key={answer.toString()}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};
