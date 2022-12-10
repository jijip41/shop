import React from 'react';

function TextInput({ placeholder, type, name, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required
      onChange={onChange}
      className=" border-2 border-rose-300 w-auto pl-4 py-2"
    ></input>
  );
}

export default TextInput;
