import './App.css';
import { Users } from './pages/Users/Users';
import Login from './pages/Login/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  const token = localStorage.getItem('token');

  // const isAuthenticated = !!token;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/users"
          element={<Users />}
          //element={isAuthenticated ? <Users /> : <Navigate to="/" />} //j'ai vu que cette pratique n'est pas bonne , est j'ai découvert React query trop tard
        />
      </Routes>
    </BrowserRouter>
  );
}
