import './App.css';
import { Users } from './pages/Users/Users';
import LoginComponent from './pages/Login/LoginComponent';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

export default function App() {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        {/* ça c pour vérifier si on passe le lien manuellement ! nice ! */}
        <Route
          path="/users"
          element={token ? <Users /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
