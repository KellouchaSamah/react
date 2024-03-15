import React, { useState, useEffect, useCallback } from 'react';
import TableComponent from '../../components/Table_component/Table_component';
import { BottonAddUser } from '../../components/Button_component/Button_component';
import AddIcon from '@mui/icons-material/Add';
import Modales from '../../components/Modales/Modales';
import axios from 'axios';

export const Users = () => {
  const [openModales, setOpenModales] = useState(false);
  const [persons, setPersons] = useState(undefined);
  //--------------------------------Getting data finally ---------------------------------
  const getData = useCallback(async () => {
    try {
      const data = await axios.get(`http://localhost:5000/users`);
      setPersons(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    if (persons === undefined) {
      getData();
    }
  }, [getData, persons]);

  const handleOpenModales = () => {
    setOpenModales(true);
  };

  // const handleClick = () => {
  //   
  // };

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
          onClick={handleOpenModales}
        >
          Ajouter un utilisateur
        </BottonAddUser>
        <TableComponent persons={persons && persons} />
      </div>
      <Modales
        open={openModales}
        setOpen={setOpenModales}
        modalType={'add'}
        title={'Ajouter un utilisateur'}
        ButtonName={'Ajouter'}
      />

      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}

      {/* <SnackbarComponent
        message={
          'rouh takhrarthsrthrthrthrhsrthszrthsthsryhsryjhsryjnryjryjhsryjhsryhrjhsryhsrhsrhrh!'
        }
        open={openSnackbar}
        severity={'error'}
      /> */}
    </div>
  );
};
