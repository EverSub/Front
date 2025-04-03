import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}

export default App;
