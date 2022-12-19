import React from 'react';

export function Button({ content, onClick }) {
  return (
    <button
      className="rounded-md bg-rose-200 text-gray-600 p-2 font-semibold"
      onClick={onClick}
    >
      {content}
    </button>
  );
}
