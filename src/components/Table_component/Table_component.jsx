import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TableHead from '@mui/material/TableHead';
import Modales from '../Modales/Modales';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardDoubleArrowRightIcon />
        ) : (
          <KeyboardDoubleArrowLeftIcon
            style={{ fill: 'var(--primary-color)' }}
          />
        )}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon
            style={{ fill: 'var(--primary-color)' }}
          />
        )}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function TableComponent({ persons }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //---------------------------------------

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - persons.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [openEditUserModal, setOpenEditUserModal] = useState(false);
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
  const [UserID, setUserID] = useState('');
  const [user, setUser] = useState(null);

  // il faut mettre await pour attendre la reponse de la requete
  const handleOpenEditUserModal = async user => {
    setUser(user);
    setUserID(user.id);
    setOpenEditUserModal(true);
  };

  const handleOpenDeleteUserModal = userId => {
    setUserID(userId);
    setOpenDeleteUserModal(true);
  };

  return (
    <TableContainer component={Paper} style={{ width: '100%' }}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: 'var(--primary-color)',
                fontFamily: 'Barlow',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              Nom
            </TableCell>
            <TableCell
              sx={{
                color: 'var(--primary-color)',
                fontFamily: 'Barlow',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              Prénom
            </TableCell>
            <TableCell
              sx={{
                color: 'var(--primary-color)',
                fontFamily: 'Barlow',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              Email
            </TableCell>
            <TableCell
              sx={{
                color: 'var(--primary-color)',
                fontFamily: 'Barlow',
                fontWeight: '600',
                fontSize: '14px',
              }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persons &&
            (rowsPerPage > 0
              ? persons.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage,
                )
              : persons
            ).map(person => (
              <TableRow key={person.id}>
                <TableCell
                  sx={{
                    color: 'var(--table-content-color)',
                    fontFamily: 'Barlow',
                    fontWeight: '400',
                    fontSize: '14px',
                    width: 200,
                  }}
                  component="th"
                  scope="row"
                >
                  {person.lastName}
                </TableCell>
                <TableCell
                  sx={{
                    color: 'var(--table-content-color)',
                    fontFamily: 'Barlow',
                    fontWeight: '400',
                    fontSize: '14px',
                    width: 200,
                  }}
                  style={{ width: 200 }}
                >
                  {person.firstName}
                </TableCell>
                <TableCell
                  sx={{
                    color: 'var(--table-content-color)',
                    fontFamily: 'Barlow',
                    fontWeight: '400',
                    fontSize: '14px',
                    width: 200,
                  }}
                  style={{ width: 200 }}
                >
                  {person.email}
                </TableCell>
                <TableCell
                  sx={{
                    color: 'var(--table-content-color)',
                    fontFamily: 'Barlow',
                    fontWeight: '400',
                    fontSize: '14px',
                    width: 200,
                  }}
                  style={{ width: 100 }}
                  align="right"
                >
                  <IconButton
                    style={{ color: 'var(--button-color)' }}
                    aria-label="edit"
                    onClick={() => handleOpenEditUserModal(person)}
                  >
                    <DriveFileRenameOutlineIcon />
                  </IconButton>
                  <IconButton
                    style={{ color: 'var(--button-color)' }}
                    aria-label="delete"
                    onClick={() => handleOpenDeleteUserModal(person.id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={4} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              style={{
                color: 'var(--button-color)',
                fontFamily: 'Barlow',
                fontWeight: '400',
                fontSize: '14px',
                width: 200,
              }}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={4}
              count={persons ? persons.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              labelRowsPerPage="Éléments par page :"
            />
          </TableRow>
        </TableFooter>
      </Table>
      {user && (
        <Modales
          open={openEditUserModal}
          setOpen={setOpenEditUserModal}
          modalType={'update'}
          title={'Modifier un utilisateur'}
          userId={UserID}
          user={user}
          resetUser={() => setUser(undefined)}
        />
      )}

      <Modales
        open={openDeleteUserModal}
        setOpen={setOpenDeleteUserModal}
        modalType={'delete'}
        title={'Confirmer la suppression'}
        userId={UserID}
        resetUser={() => setUser(undefined)}
      />
    </TableContainer>
  );
}
