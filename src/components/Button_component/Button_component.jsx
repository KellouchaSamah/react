import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const BottonAddUser = styled(Button)({
  background: 'var(--button-color)',
  borderRadius: '22px',
  padding: '12px, 24px, 12px, 20px',
  width: '234px',
  height: '44px',
  fontWeight: 600,
  fontSize: '14px',
  fontFamily: 'Montserrat',
  textTransform: 'unset',
  '&:hover': {
    backgroundColor: 'var(--button-hover-color)',
    boxShadow: 'none',
  },
});

export const BottonAdd = styled(Button)({
  background: 'var(--button-color)',
  borderRadius: '24px',
  padding: '14px, 24px, 14px, 24px',
  width: '104px',
  height: '44px',
  fontWeight: 600,
  fontSize: '14px',
  fontFamily: 'Montserrat',
  textTransform: 'unset',
  '&:hover': {
    backgroundColor: 'var(--button-hover-color)',
    boxShadow: 'none',
  },
});

export const BottonCancel = styled(Button)({
  color: 'var(--button-color)',
  borderRadius: '24px',
  padding: '14px, 24px, 14px, 24px',
  width: '104px',
  height: '44px',
  fontWeight: 600,
  fontSize: '14px',
  fontFamily: 'Montserrat',
  textTransform: 'unset',
});

export const BottonDelete = styled(Button)({
  background: 'var(--button-delete-color)',
  borderRadius: '24px',
  padding: '14px, 24px, 14px, 24px',
  width: '129px',
  height: '44px',
  fontWeight: 600,
  fontSize: '14px',
  fontFamily: 'Montserrat',
  textTransform: 'unset',
  '&:hover': {
    backgroundColor: 'var(--button-delete-hover-color)',
    boxShadow: 'none',
  },
});

export const BottonSignIn = styled(Button)({
  background: 'var(--button-color)',
  borderRadius: '24px',
  padding: '14px, 24px, 14px, 24px',
  width: '334px',
  height: '44px',
  fontWeight: 600,
  fontSize: '14px',
  fontFamily: 'Montserrat',
  textTransform: 'unset',
  '&:hover': {
    backgroundColor: 'var(--button-hover-color)',
    boxShadow: 'none',
  },
});
