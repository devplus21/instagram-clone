import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ isAdmin, redirectPath = '/login', children }) => {
  const { auth } = useSelector((state) => state);

  if (auth.user.role !== 'admin') {
    return <Navigate to={redirectPath} replace />;
  }

  // return children ? children : <Outlet />;
  return children && children;
};

export default ProtectedRoutes;
