import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import AdminLayout from 'layout/AdminLayout';
const AdminRoutes = () => {
  const { auth } = useSelector((state) => state);
  console.log('lan 1');
  // if (auth.user.role !== 'admin') {
  //   console.log('lan 1');
  //   return <Navigate to="/" />;
  // }

  return <AdminLayout />;
};

export default AdminRoutes;
