import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './useAuth';

function ProtectedRoutes() {
  const auth = useAuth;
  return auth ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoutes;
