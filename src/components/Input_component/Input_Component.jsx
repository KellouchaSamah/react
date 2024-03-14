import React, { useState } from 'react';
import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
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

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <BootstrapInput
      type={showPassword ? 'text' : 'password'}
      placeholder="********"
      endAdornment={
        <InputAdornment
          position="end"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export const EmailInput = () => {
  return <BootstrapInput type="email" placeholder="Email" />;
};
