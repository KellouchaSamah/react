import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './SnackBarComponent.css';
export default function SnackbarComponent({
  message,
  open,
  severity,
  autoHideDuration,
}) {
  const getIcon = () => {
    switch (severity) {
      case 'error':
        return <CancelIcon fontSize="inherit" />;
      case 'success':
        return <CheckCircleIcon fontSize="inherit" />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (severity) {
      case 'error':
        return 'Echec';
      case 'success':
        return 'Success';
      default:
        return null;
    }
  };
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration}>
      <Alert
        icon={getIcon()}
        severity={severity}
        className="alert"
        sx={{ width: '100%', backgroundColor: '#fff' }}
      >
        <Grid className="contentTitle">{getTitle()}</Grid>
        <Grid
          className="contentMess"
        >
          {message}
        </Grid>
      </Alert>
    </Snackbar>
  );
}
