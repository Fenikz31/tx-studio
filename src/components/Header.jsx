import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Account from '@mui/icons-material/Person';
import { useTheme } from '@mui/material';

import Magnify from '@assets/loupe.svg';
import FavoriteFull from '@icons/FavoriteFull';

import Logo from '@assets/Logo.png'

const items = [
  { id: 'Acheter', selected: true },
  { id: 'Louer', selected: false },
  { id: 'Gestion', selected: false },
  { id: 'Notre Agence', selected: false },
  { id: 'Investisseur', selected: false },
  { id: 'Entreprise', selected: false },
  { id: 'Contact', selected: false },
]

const Search = styled( 'div' )(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha( theme.palette.common.white, 0.15 ),
  '&:hover': {
    backgroundColor: alpha( theme.palette.common.white, 0.25 ),
  },
  marginLeft: 0,
  marginRight: 16,
  width: '100%',
  [ theme.breakpoints.up( 'sm' )]: {
    marginLeft: theme.spacing( 1 ),
    width: 'auto',
  },
}));

export default function Header() {
  const { palette } = useTheme();
  return (
    <Box >
      <AppBar
        color='default'
        position='sticky'
        sx={{
          backgroundColor: '#FFFFFF'
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant='h6'
          >
            <Box
            sx={{
              width: 120
            }}
            >
              <img src={ Logo } style={{
                width: '100%'
              }}/>
            </Box>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '100%'
            }}
          >
            {
              items.map(( item ) => (
                <Typography
                  key={ item.id }
                  fontWeight={ 500 }
                  variant='header'
                >
                  { item.id }
                </Typography>
              ))
            }
          </Box>
          <Search>
            <TextField
              placeholder='Rechercher …'
              fullWidth
              InputProps={{
                'aria-label': 'search',
                style: {
                  borderRadius: 50,
                  paddingRight: 4,
                },
                endAdornment: (
                  <Icon
                    sx={{
                      backgroundColor: palette.button.primary,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 32,
                      width: 32,
                    }}
                  >
                    <img src={ Magnify } style={{
                      height: 16,
                      width: 16
                    }} />
                  </Icon>
                )
              }}
              margin='dense'
              size='small'
            />
          </Search>
          <Stack alignItems='center' direction='row' spacing={ 2 }>
            <FavoriteFull  />
            <Account fontSize='large'  />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
