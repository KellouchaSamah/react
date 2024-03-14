import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { BottonSignIn } from '../../components/Button_component/Button_component';
import { AccedezA } from '../../components/Labels_component/Labels_component';
import { TutoReact } from '../../components/Labels_component/Labels_component';
import { Label } from '../../components/Labels_component/Labels_component';
import {
  EmailInput,
  PasswordInput,
} from '../../components/Input_component/Input_Component';
import AddIcon from '@mui/icons-material/Add';
import { BpCheckbox } from '../../components/Input_component/Checkbox_component';

function Login_component() {
  return (
    <Card
      sx={{
        maxWidth: 414,
        maxHeight: 443,
        borderRadius: '10px',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AccedezA>Accédez à</AccedezA>
        <TutoReact>Tuto-React </TutoReact>

        <div>
          <Label>Email</Label>
          <EmailInput defaultValue="Email" startIcon={<AddIcon />} />
        </div>
        <div>
          <Label>Mot de passe </Label>
          <PasswordInput />
        </div>
        <div>
          <BpCheckbox />
          <Label>Se souvenir de moi</Label>
        </div>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <BottonSignIn variant="contained" disableRipple>
          Connexion
        </BottonSignIn>
      </CardActions>
    </Card>
  );
}

export default Login_component;
