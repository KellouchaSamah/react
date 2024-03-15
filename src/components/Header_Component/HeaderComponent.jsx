import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Img from '../../assets/images/logo.PNG';
import LogoutIcon from '@mui/icons-material/Logout';

export default function HeaderComponent() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <img
            style={{
              width: '96px',
              height: '32px',
            }}
            src={Img}
          />

          <Button
            startIcon={<LogoutIcon />}
            sx={{
              color: 'var(--label-primary-color)',
              alignItems: 'flex-end',
              fontFamily: 'Montserrat',
              fontWeight: 600,
              fontSize: '14px',
              textTransform: 'unset',
            }}
          >
            Déconnexion
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
