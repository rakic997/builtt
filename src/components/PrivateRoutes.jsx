import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';

import Nav from './Nav';

const ProtectedRoute = () => {
  const user = useSelector(selectUser);

  if (!user || !user.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )

};

export default ProtectedRoute;