import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../components/context/AuthContext';

function ProtectedRoute({ children, requiredAdmin }) {
  const { user } = useAuthContext();
  if (!user || (requiredAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace></Navigate>;
  }
  return { children };
}

export default ProtectedRoute;
