import React from 'react';
import { Link } from 'react-router-dom';

function HeaderIcon({ to, icon }) {
  return (
    <Link
      to={to}
      className="rounded-full border-2 border-rose-200 text-gray-600 p-2 hover:bg-rose-50 hover:text-gray-800"
    >
      {icon}
    </Link>
  );
}

export default HeaderIcon;
