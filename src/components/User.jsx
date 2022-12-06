import React from 'react';

function User({ user }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={user.photoURL}
        alt="user"
        className="rounded-full w-10 h-10 hidden md:block"
      />
      <span>{user.displayName}</span>
    </div>
  );
}

export default User;
