import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Grid, IconButton } from '@mui/material';
import {
  BottonCancel,
  BottonDelete,
} from '../Button_component/Button_component';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import SnackbarComponent from '../SnackBar_Component/SnackbarComponent';
import { useState } from 'react';
import { deleteUser, getUsers } from '../../services/userService';

import './Modales.css';
// import { useNavigate } from 'react-router-dom';

export default function DeleteModale({ open, setOpen, title, userId }) {
  // const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('');
  // const [isValidEmail, setIsValidEmail] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(userId);
      setMessage('L’utilisateur a été supprimé avec succès ');
      setSeverity('success');
    } catch (error) {
      setMessage('La suppression de l’utilisateur a échoué ');
      setSeverity('error');
    }
    setOpenSnackbar(true);
    setTimeout(() => {
      handleClose();
      setOpenSnackbar(false);
      window.location.reload();
      getUsers();
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
              <PersonRemoveIcon style={{ fill: 'var(--primary-color)' }} />{' '}
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
          <Typography
            style={{
              color: 'var(--primary-color)',
              fontFamily: 'Barlow',
              fontWeight: 400,
              fontSize: '16px',
            }}
          >
            Vous êtes sur le point de supprimer un utilisateur. Cette action est
            irrévercible. Souhaitez-vous confirmer ?
          </Typography>
        </DialogContent>
        <DialogActions className="ModalActions">
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            style={{ padding: '8px 32px 16px 32px', gap: 24 }}
          >
            <BottonCancel onClick={handleClose}>Annuler</BottonCancel>
            <BottonDelete variant="contained" onClick={handleDeleteUser}>
              Supprimer
            </BottonDelete>
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
