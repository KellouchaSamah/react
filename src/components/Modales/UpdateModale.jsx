import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Grid, IconButton } from '@mui/material';
import { Input } from '../Input_component/Input_Component';
import { Label } from '../Labels_component/Labels_component';
import { BottonAdd, BottonCancel } from '../Button_component/Button_component';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import SnackbarComponent from '../SnackBar_Component/SnackbarComponent';
import { useState } from 'react';
import { updateUser } from '../../services/userService';

import './Modales.css';

export default function UpdateModale({
  open,
  setOpen,
  title,
  userId,
  user,
  resetUser,
}) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('');
  const [email, setEmail] = useState(user?.email);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    resetUser();
  };

  const handleUpdateUser = async () => {
    try {
      const updatedUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };

      await updateUser(userId, updatedUser);
      setMessage('L’utilisateur a été modifié avec succès   ');
      setSeverity('success');
    } catch (error) {
      setMessage('La modification de l’utilisateur a échoué ');
      setSeverity('error');
    }
    setOpenSnackbar(true);
    setTimeout(() => {
      handleClose();
      setOpenSnackbar(false);
      window.location.reload();
    }, 1500);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'sm'}
        sm={600}
      >
        <DialogTitle className="ModalTitle">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid
              container
              alignItems="center"
              style={{
                width: 'fit-content',
                gap: 8,
              }}
            >
              <DriveFileRenameOutlineIcon
                style={{ fill: 'var(--primary-color)' }}
              />
              <Typography
                variant="h6"
                style={{
                  fontFamily: 'Montserrat',
                  fontWeight: '600',
                  fontSize: '16px',
                  color: 'var(--primary-color)',
                }}
              >
                {title}
              </Typography>
            </Grid>

            <IconButton
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
              onClick={handleClose}
            >
              <CloseIcon style={{ fill: '#00008C' }} />
            </IconButton>
          </Grid>
        </DialogTitle>
        <Divider />
        <DialogContent className="ModalContent">
          <Grid container direction="column" style={{ gap: 16 }}>
            <Grid
              container
              style={{
                gap: '20px',
              }}
            >
              <Grid container direction="column" flex={1} style={{ gap: 4 }}>
                <Label>Nom</Label>
                <Input
                  type={'text'}
                  placeholder={'Nom'}
                  value={lastName}
                  width={'100%'}
                  onChange={handleLastNameChange}
                />
              </Grid>
              <Grid container direction="column" flex={1} style={{ gap: 4 }}>
                <Label>Prénom</Label>
                <Input
                  type={'text'}
                  placeholder={'Prénom'}
                  width={'100%'}
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </Grid>
            </Grid>
            <Grid container direction="column" style={{ gap: 4 }}>
              <Label>Email</Label>
              <Input
                type={'email'}
                placeholder={'Email'}
                width={'100%'}
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className="ModalActions">
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            style={{ padding: '8px 32px 16px 32px', gap: 24 }}
          >
            <BottonCancel onClick={handleClose}>Annuler</BottonCancel>
            <BottonAdd variant="contained" onClick={handleUpdateUser}>
              Modifier
            </BottonAdd>{' '}
          </Grid>
        </DialogActions>

        <SnackbarComponent
          open={openSnackbar}
          message={message}
          severity={severity}
        />
      </Dialog>
    </>
  );
}
