import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/Table_component/Table_component';
import { BottonAddUser } from '../../components/Button_component/Button_component';
import AddIcon from '@mui/icons-material/Add';
import AddUserModal from '../../components/Modales/AddUserModal';
import SnackbarComponent from '../../components/SnackBar_Component/SnackbarComponent';
import axios from 'axios';

export const Users = () => {
  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [persons, setPersons] = useState(undefined);
  const getData = async () => {
    const data = await axios.get(`http://localhost:5000/users`);
    setPersons(data.data);
  };
  useEffect(() => {
    if (persons === undefined) {
      getData();
    }
  }, [getData]);

  const handleOpenAddUserModal = () => {
    setOpenAddUserModal(true);
  };

  const handleClick = () => {
    setOpenSnackbar(true);
    setTimeout(() => {
      setOpenSnackbar(false);
    }, 3000);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 30,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          gap: 30,
        }}
      >
        <BottonAddUser
          startIcon={<AddIcon />}
          variant="contained"
          disableRipple
          onClick={handleOpenAddUserModal}
        >
          Ajouter un utilisateur
        </BottonAddUser>
        <TableComponent persons={persons} />
      </div>
      <AddUserModal
        open={openAddUserModal}
        setOpen={setOpenAddUserModal}
        modalType={'add'}
        title={'Ajouter un utilisateur'}
        ButtonName={'Ajouter'}
      />

      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}

      <SnackbarComponent
        message={
          'rouh takhrarthsrthrthrthrhsrthszrthsthsryhsryjhsryjnryjryjhsryjhsryhrjhsryhsrhsrhrh!'
        }
        open={openSnackbar}
        severity={'error'}
      />
    </div>
  );
};
