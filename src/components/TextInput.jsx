import React from 'react';

function TextInput({ placeholder, type, name, onChange, accept }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      accept={accept}
      required
      onChange={onChange}
      className=" border border-rose-300 w-auto pl-4 py-2"
    ></input>
  );
}

export default TextInput;
