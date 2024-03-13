import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#ECECEF' : '#2D3843',
    fontSize: 14,
    color: '#666D92',
    width: '334px',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: 'Barlow',
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
}));
