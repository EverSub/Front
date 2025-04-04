import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './routes/ProtectRoute';

function App() {
  const isAuthenticated = false; // TODO: 실제 상태로 대체
  const role = 'user';        // TODO: 실제 상태로 대체  

  return (
    <Routes>
      <Route path="/" element={
        isAuthenticated ? <Home /> : <Navigate to="/login" replace />
      } />

      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />
      } />

      <Route
        path="/admin"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} role={role} element={<AdminPage />} />
        }
      />
      
      <Route
        path="/user"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} role={role} element={<UserPage />} />
        }
      />
    </Routes>
  );
}

export default App;
