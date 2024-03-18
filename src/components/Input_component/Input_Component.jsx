import React, { useState } from 'react';
import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const BootstrapInput = styled(InputBase)(({ theme, width }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#ECECEF' : '#2D3843',
    fontSize: 14,
    color: '#666D92',
    width: width || '334px',
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

export const PasswordInput = ({ onChange, defaultValue }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <BootstrapInput
      type={showPassword ? 'text' : 'password'}
      placeholder="********"
      onChange={onChange}
      defaultValue={defaultValue}
      endAdornment={
        <InputAdornment
          position="start"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateX(-180%)',
          }}
        >
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? (
              <VisibilityOff style={{ fill: 'var(--primary-color)' }} />
            ) : (
              <Visibility style={{ fill: 'var(--primary-color)' }} />
            )}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export const Input = ({
  type,
  placeholder,
  width,
  onChange,
  defaultValue,
  error,
  value,
}) => {
  return (
    <BootstrapInput
      type={type}
      error={error}
      placeholder={placeholder}
      width={width}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
    />
  );
};
