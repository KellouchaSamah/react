import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { BottonSignIn } from '../../components/Button_component/Button_component';
import { AccedezA } from '../../components/Labels_component/Labels_component';
import { TutoReact } from '../../components/Labels_component/Labels_component';
import { Label } from '../../components/Labels_component/Labels_component';
import {
  Input,
  PasswordInput,
} from '../../components/Input_component/Input_Component';
import { BpCheckbox } from '../../components/Input_component/Checkbox_component';
import { FormControlLabel, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = e => {
    if (e.target.value) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    }
    console.log(email);
  };

  const handleLogin = () => {
    if (
      (email === 'training@api-master.fr' && password === 'react') ||
      (localStorage.getItem('email') && localStorage.getItem('password'))
    ) {
      const Token = '0123456789';

      localStorage.setItem('token', Token);
      navigate('/users');

      console.log('Connexion réussie !');
    } else {
      console.error('Identifiants incorrects');
    }
  };
  useEffect(() => {
    console.log('email now', email);
  }, [email]);

  return (
    <Grid
      style={{
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
          <AccedezA>Accédez à</AccedezA>
          <TutoReact>Tuto-React </TutoReact>
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
export default LoginComponent;
