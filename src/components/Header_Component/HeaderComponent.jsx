import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Img from '../../assets/images/logo.PNG';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import './HeaderComponent.css';

export default function HeaderComponent() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header">
        <Toolbar className="header">
          <img className="logo" src={Img} alt="DocaPoste" />
          <Button startIcon={<LogoutIcon />} onClick={handleLogOut}>
            Déconnexion
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
