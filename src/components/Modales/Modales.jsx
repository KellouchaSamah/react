import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Grid, IconButton } from '@mui/material';
import { Input } from '../Input_component/Input_Component';
import { Label } from '../Labels_component/Labels_component';
import {
  BottonAdd,
  BottonCancel,
  BottonDelete,
} from '../Button_component/Button_component';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import SnackbarComponent from '../SnackBar_Component/SnackbarComponent';

export default function Modales({
  open,
  setOpen,
  modalType,
  title,
  ButtonName,
  userId,
}) {
  const [openSnackbarError, setOpenSnackbarError] = React.useState(false);
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  function DeleteUser() {
    console.log(userId);
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then(response => {
        console.log('User deleted successfully');
        setOpenSnackbarSuccess(true);
        setTimeout(() => {
          setOpenSnackbarSuccess(false);
          handleClose();
        }, 3000);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        setOpenSnackbarError(true);
        setTimeout(() => {
          handleClose();
          setOpenSnackbarError(false);
        }, 3000);
      });
  }

  const iconChange = () => {
    switch (modalType) {
      case 'add':
        return (
          <PersonAddAltIcon style={{ fill: 'var(--label-primary-color)' }} />
        );
      case 'delete':
        return (
          <PersonRemoveIcon style={{ fill: 'var(--label-primary-color)' }} />
        );
      case 'update':
        return (
          <DriveFileRenameOutlineIcon
            style={{ fill: 'var(--label-primary-color)' }}
          />
        );
      default:
        return true;
    }
  };
  const renderContent = () => {
    switch (modalType) {
      case 'add':
      case 'update':
        return (
          <>
            <Grid container direction="column" style={{ gap: 16 }}>
              <Grid
                container
                style={{
                  gap: '20px',
                }}
              >
                <Grid container direction="column" flex={1} style={{ gap: 4 }}>
                  <Label>Nom</Label>
                  <Input type={'text'} placeholder={'Input'} width={'100%'} />
                </Grid>
                <Grid container direction="column" flex={1} style={{ gap: 4 }}>
                  <Label>Prénom</Label>
                  <Input type={'text'} placeholder={'Input'} width={'100%'} />
                </Grid>
              </Grid>
              <Grid container direction="column" style={{ gap: 4 }}>
                <Label>Email</Label>
                <Input type={'email'} placeholder={'Email'} width={'100%'} />
              </Grid>
            </Grid>
          </>
        );
      case 'delete':
        return (
          <>
            <Typography
              style={{
                color: 'var(--label-primary-color)',
                fontFamily: 'Barlow',
                fontWeight: 400,
                fontSize: '16px',
              }}
            >
              Vous êtes sur le point de supprimer un utilisateur. Cette action
              est irrévercible. Souhaitez-vous confirmer ?{' '}
            </Typography>
          </>
        );
      default:
        return null;
    }
  };

  const renderActions = () => {
    switch (modalType) {
      case 'add':
        return (
          <>
            <BottonCancel onClick={handleClose}>Annuler</BottonCancel>
            <BottonAdd variant="contained">{ButtonName}</BottonAdd>
          </>
        );
      case 'update':
        return (
          <>
            <BottonCancel onClick={handleClose}>Annuler</BottonCancel>
            <BottonAdd variant="contained">{ButtonName}</BottonAdd>
          </>
        );
      case 'delete':
        return (
          <>
            <BottonCancel onClick={handleClose}>Annuler</BottonCancel>
            <BottonDelete variant="contained" onClick={DeleteUser}>
              Supprimer
            </BottonDelete>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: event => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
        fullWidth={true}
        maxWidth={'sm'}
        sm={600}
      >
        <DialogTitle>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{
              padding: '16px 0px',
            }}
          >
            <Grid
              container
              alignItems="center"
              style={{
                width: 'fit-content',
                gap: 8,
              }}
            >
              {iconChange()}
              <Typography
                variant="h6"
                style={{
                  fontFamily: 'Montserrat',
                  fontWeight: '600',
                  fontSize: '16px',
                  color: 'var(--label-primary-color)',
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
        <DialogContent>{renderContent()}</DialogContent>
        <DialogActions>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            style={{ padding: '8px 32px 16px 32px', gap: 24 }}
          >
            {renderActions()}
          </Grid>
        </DialogActions>

        <SnackbarComponent
          message={'La suppression de l’utilisateur a échoué '}
          open={openSnackbarError}
          severity={'error'}
        />
        <SnackbarComponent
          message={'L’utilisateur a été supprimé avec succès '}
          open={openSnackbarSuccess}
          severity={'success'}
        />
      </Dialog>
    </>
  );
}
