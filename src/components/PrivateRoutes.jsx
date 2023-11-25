import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';

const ProtectedRoute = () => {
  const user = useSelector(selectUser);

  if (!user || !user.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet /> 
  
};

export default ProtectedRoute;