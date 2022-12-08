import React from 'react';

function SignButton({ content, onClick }) {
  return (
    <button
      className="rounded-md bg-rose-200 text-gray-600 p-2"
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default SignButton;
