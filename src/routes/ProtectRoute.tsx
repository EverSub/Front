import { Navigate } from 'react-router-dom';
import { JSX } from 'react';

interface ProtectedRouteProps {
  element: JSX.Element;
  isAuthenticated: boolean;
  role: string;
  allow: string;
}

const ProtectedRoute = ({ element, isAuthenticated, role, allow }: ProtectedRouteProps) => {

  if (!isAuthenticated) return <Navigate to={'/login'} replace />;

  if (role !== allow) return <Navigate to={'/'} replace />;

  return element;
};

export default ProtectedRoute;
