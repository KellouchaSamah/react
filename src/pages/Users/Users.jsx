// Users.js
import React, { useState } from 'react';
import TableComponent from '../../components/Table_component/Table_component';
import { BottonAddUser } from '../../components/Button_component/Button_component';
import AddIcon from '@mui/icons-material/Add';
import AddUserModal from '../../components/Modales/AddUserModal';

export const Users = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <BottonAddUser
        startIcon={<AddIcon />}
        variant="contained"
        disableRipple
        onClick={handleOpen}
      >
        Ajouter un utilisateur
      </BottonAddUser>
      <TableComponent />
      <AddUserModal open={open} setOpen={setOpen} />
    </div>
  );
};
