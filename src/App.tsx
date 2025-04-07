import { Routes, Route, Navigate } from 'react-router-dom';
import UserPage from './pages/user/UserPage';
import AdminPage from './pages/admin/AdminPage';
import LoginPage from './pages/commons/LoginPage';
import ProtectedRoute from './routes/ProtectRoute';
import UserSubManagePage from './pages/user/UserSubManagePage';

function App() {
  const isAuthenticated = true; // TODO: 실제 상태로 대체
  const role = 'user';        // TODO: 실제 상태로 대체  

  return (
    <Routes>
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

      <Route
        path="/user/subManage"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} role={role} element={<UserSubManagePage />} />
        }
      />
    </Routes>
  );
}

export default App;
