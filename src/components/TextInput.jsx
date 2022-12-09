import React from 'react';

function TextInput({ placeholder, type }) {
  return (
    <input
      type={type}
      className=" border-2 border-rose-300 w-auto pl-4 py-2"
      placeholder={placeholder}
    ></input>
  );
}

export default TextInput;
