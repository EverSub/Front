import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectRoute';

// common
import LoginPage from './pages/commons/LoginPage';

// admin
import AdminPage from './pages/admin/AdminPage';
import AdminSubManagePage from './pages/admin/AdminSubManagePage';

// user
import UserPage from './pages/user/UserPage';
import UserSubManagePage from './pages/user/UserSubManagePage';

function App() {
  const isAuthenticated = true; // TODO: 실제 상태로 대체
  const role = 'user';          // TODO: 실제 상태로 대체  

  return (
    <Routes>
      {/* 로그인 */}
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />
        }
      />
      
      <Route
        path="/"
        element={
          role === 'user' ? <Navigate to="/mypage" replace /> : <Navigate to="/admin" replace />
        }
      />

      {/* 사용자 */}
      <Route
        path="/mypage"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} role={role} allow='user' element={<UserPage />} />
        }
      />

      <Route
        path="/subscription"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} role={role} allow='user' element={<UserSubManagePage />} />
        }
      />

      {/* 관리자 */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} role={role} allow='admin' element={<AdminPage />} />
        }
      />

      <Route
        path="/admin/subscription"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} role={role} allow='admin' element={<AdminSubManagePage />} />
        }
      />
    </Routes>
  );
}

export default App;
