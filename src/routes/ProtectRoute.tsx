import { Navigate } from 'react-router-dom';
import { JSX } from 'react';

interface ProtectedRouteProps {
  element: JSX.Element;
  isAuthenticated: boolean;
  role: string;
  redirectTo?: string;
}

const ProtectedRoute = ({ element, isAuthenticated, redirectTo = '/login' }: ProtectedRouteProps) => {
  return isAuthenticated ? element : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
