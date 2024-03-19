import './App.css';
import { Users } from './pages/Users/Users';
import Login from './pages/Login/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

export default function App() {
  const token = localStorage.getItem('token');

  const isAuthenticated = !!token;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/users"
          element={isAuthenticated ? <Users /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
