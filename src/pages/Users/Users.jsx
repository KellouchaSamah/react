import React, { useState, useEffect, useCallback } from 'react';
import TableComponent from '../../components/Table_component/Table_component';
import { BottonAddUser } from '../../components/Button_component/Button_component';
import HeaderComponent from '../../components/Header_Component/HeaderComponent';

import AddIcon from '@mui/icons-material/Add';
import Modales from '../../components/Modales/Modales';
import { Grid } from '@mui/material';
import { getUsers } from '../../services/userService';

export const Users = () => {
  const [openModales, setOpenModales] = useState(false);
  const [persons, setPersons] = useState(undefined);
  //--------------------------------Getting data finally ---------------------------------
  const fetchData = useCallback(async () => {
    try {
      const users = await getUsers();
      setPersons(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleOpenModales = () => {
    setOpenModales(true);
  };

  return (<>
    <HeaderComponent/>

<Grid
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 30,
  }}
>
  <Grid
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
      onClick={handleOpenModales}
    >
      Ajouter un utilisateur
    </BottonAddUser>
    <TableComponent persons={persons && persons} />
  </Grid>
  <Modales
    open={openModales}
    setOpen={setOpenModales}
    modalType={'add'}
    title={'Ajouter un utilisateur'}
  />
</Grid>
  </>

  );
};
