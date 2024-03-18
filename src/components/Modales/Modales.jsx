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
import SnackbarComponent from '../SnackBar_Component/SnackbarComponent';
import { useState } from 'react';
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from '../../services/userService';
import { useNavigate } from 'react-router-dom';

export default function Modales({
  open,
  setOpen,
  modalType,
  title,
  userId,
  user,
  resetUser,
}) {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('');
  const [email, setEmail] = useState(user?.email);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  // const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = e => {
    setEmail(e.target.value);
    // const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    // setIsValidEmail(isValid);
  };

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    resetUser()
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(userId);
      setMessage('L’utilisateur a été supprimé avec succès ');
      setSeverity('success');
      setOpenSnackbar(true);
      setTimeout(() => {
        setOpenSnackbar(false);
        handleClose();
      }, 1500);
    } catch (error) {
      setMessage('La suppression de l’utilisateur a échoué ');
      setSeverity('error');
      setOpenSnackbar(true);
      setTimeout(() => {
        setOpenSnackbar(false);
        handleClose();
      }, 1500);
    }
  };

  const handleAddUser = async () => {
    try {
      const myUser = {
        lastName: lastName,
        firstName: firstName,
        email: email,
      };
      await addUser(myUser);
      setMessage('L’utilisateur a été ajouté avec succès  ');
      setSeverity('success');
      setOpenSnackbar(true);
      setTimeout(() => {
        setOpenSnackbar(false);
        handleClose();
      }, 1500);
    } catch (error) {
      setMessage('L’ajout de l’utilisateur a échoué ');
      setSeverity('error');
      setOpenSnackbar(true);
      setTimeout(() => {
        handleClose();
        setOpenSnackbar(false);
      }, 1500);
    }
  };

  const loadDataFunction = async () => {
    const response = await getUsers();
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
    loadDataFunction();
    setTimeout(() => {
      handleClose();
      setOpenSnackbar(false);
      getUsers();
    }, 1500);
  };
  const iconChange = () => {
    switch (modalType) {
      case 'add':
        return <PersonAddAltIcon style={{ fill: 'var(--primary-color)' }} />;
      case 'delete':
        return <PersonRemoveIcon style={{ fill: 'var(--primary-color)' }} />;
      case 'update':
        return (
          <DriveFileRenameOutlineIcon
            style={{ fill: 'var(--primary-color)' }}
          />
        );
      default:
        return true;
    }
  };
  const renderContent = () => {
    switch (modalType) {
      case 'add':
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
                  <Input
                    type={'text'}
                    onChange={handleLastNameChange}
                    placeholder={'Nom'}
                    width={'100%'}
                  />
                </Grid>
                <Grid container direction="column" flex={1} style={{ gap: 4 }}>
                  <Label>Prénom</Label>
                  <Input
                    type={'text'}
                    onChange={handleFirstNameChange}
                    placeholder={'Prénom'}
                    width={'100%'}
                  />
                </Grid>
              </Grid>
              <Grid container direction="column" style={{ gap: 4 }}>
                <Label>Email</Label>
                <Input
                  type={'email'}
                  placeholder={'Email'}
                  width={'100%'}
                  // value={email}
                  onChange={handleEmailChange}
                  // error={!isValidEmail}
                  // helperText={
                  //   !isValidEmail ? 'Entrer une adresse mail valide !' : ''
                  // }
                />
              </Grid>
            </Grid>
          </>
        );
      case 'update':
        return (
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
        );
      case 'delete':
        return (
          <>
            <Typography
              style={{
                color: 'var(--primary-color)',
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
            <BottonAdd
              variant="contained"
              type="submit"
              onClick={handleAddUser}
            >
              Ajouter
            </BottonAdd>
          </>
        );
      case 'update':
        return (
          <>
            <BottonCancel onClick={handleClose}>Annuler</BottonCancel>
            <BottonAdd variant="contained" onClick={handleUpdateUser}>
              Modifier
            </BottonAdd>
          </>
        );
      case 'delete':
        return (
          <>
            <BottonCancel onClick={handleClose}>Annuler</BottonCancel>
            <BottonDelete variant="contained" onClick={handleDeleteUser}>
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
          open={openSnackbar}
          message={message}
          severity={severity}
        />
      </Dialog>
    </>
  );
}
