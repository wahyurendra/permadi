import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthGuard } from '../guards/AuthGuard';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
// Import other components as needed

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        <Route
          path="/"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
        {/* Add other protected routes similarly */}
      </Routes>
    </BrowserRouter>
  );
};
