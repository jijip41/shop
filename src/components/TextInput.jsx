import React from 'react';

function TextInput({ placeholder }) {
  return (
    <input
      type="text"
      className="border-2 border-black"
      placeholder={placeholder}
    ></input>
  );
}

export default TextInput;
