import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { BottonSignIn } from '../../components/Button_component/Button_component';
import { Label } from '../../components/Labels_component/Labels_component';
import {
  Input,
  PasswordInput,
} from '../../components/Input_component/Input_Component';
import { BpCheckbox } from '../../components/Input_component/Checkbox_component';
import { FormControlLabel, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import App from '../../App';

function Login() {
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [password, setPassword] = useState(localStorage.getItem('password'));
  const navigate = useNavigate();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = e => {
    if (e.target.checked) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    }
  };

  const handleLogin = () => {
    if (
      (email === 'training@api-master.fr' && password === 'react') ||
      (localStorage.getItem('email') === email &&
        localStorage.getItem('password') === password)
    ) {
      const Token = '0123456789';
      localStorage.setItem('token', Token);
      App();
      navigate('/users');
      console.log('Connexion réussie !');
    } else {
      console.error('Identifiants incorrects');
    }
  };

  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card
        sx={{
          maxWidth: '100%',
          maxHeight: '100%',
          borderRadius: '10px',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <CardContent
          sx={{
            width: '414px',
            height: '320px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography id="accedezA">Accédez à</Typography>
          <Typography id="tutoReact">Tuto-React </Typography>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <Label>Email</Label>
              <Input
                placeholder="Email"
                onChange={handleEmailChange}
                defaultValue={
                  localStorage.getItem('email')
                    ? localStorage.getItem('email')
                    : ''
                }
              />
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <Label>Mot de passe </Label>
              <PasswordInput
                onChange={handlePasswordChange}
                defaultValue={
                  localStorage.getItem('password')
                    ? localStorage.getItem('password')
                    : ''
                }
              />
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FormControlLabel
                control={<BpCheckbox onChange={handleRememberMeChange} />}
              />
              <Label>Se souvenir de moi</Label>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '30px',
          }}
        >
          <BottonSignIn variant="contained" onClick={handleLogin} disableRipple>
            Connexion
          </BottonSignIn>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Login;
