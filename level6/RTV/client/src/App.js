import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Auth from './Components/Auth';
import Profile from './Components/Profile';
import Public from './Components/Public';
import ProtectedRoute from './Components/ProtectedRoute';
import { UserContext } from './Context/UserProvider';

function App() {
  const { token, logout } = useContext(UserContext);
  return (
    <div className="App">
      <Navbar logout={logout} token={token} />
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/profile" /> : <Auth />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute token={token}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/public" element={<Public />} />
      </Routes>
    </div>
  );
}

export default App;
