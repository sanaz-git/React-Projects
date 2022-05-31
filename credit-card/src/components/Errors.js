import React from 'react';

export const Errors = ({ messages }) => {
  return (
    <div>
      <ul className="ul">
        {messages &&
          messages.map((message, index) => <li key={index}>{message}</li>)}
      </ul>
    </div>
  );
};
