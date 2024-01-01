import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Button, useTheme } from '@mui/material';

import EnveloppeFull from '@icons/Enveloppe';
import Facebook from '@icons/Facebook';
import Instagram from '@icons/Instagram';
import LinkedIn from '@icons/LinkedIn';

export default function SocialBanner() {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: palette.button.primary,
        display: 'flex',
        height: 50,
        mt: 12,
        mb: 12,
        width: '100%',
      }}
    >
      <Container
        sx={{
          backgroundColor: palette.button.primary,
          display: 'flex',
          height: 50,
          width: '100%',
        }}
        id='social-banner'
      >
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: palette.button.secondary,
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            width: 150,
          }}
        >
          <EnveloppeFull color='white' fontSize='large' />
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            color: 'white',
            display: 'flex',
            fontWeight: 600,
            height: '100%',
            justifyContent: 'center',
            width: 250,
          }}
        >
          NEWSLETTER
        </Box>
        <Box
          sx={{
            height: '100%',
            width: '80%',
          }}
        >
          <TextField
            placeholder='Votre e-mail*'
            fullWidth
            InputProps={{
              'aria-label': 'search',
              style: {
                borderColor: 'transparent',
                borderRadius: 15,
                paddingRight: 4,
                backgroundColor: 'white',
                width: '80%',
                '&:hover': {
                  borderColor: 'transparent'
                }
              },
              endAdornment: (
                <Button
                  sx={{
                    backgroundColor: palette.button.primary,
                    color: 'white',
                    borderRadius: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 32,
                    textTransform: 'none',
                    width: 120,
                    '&:hover': {
                      backgroundColor: palette.button.primary
                    }
                  }}
                >
                  Suivez-nous
                </Button>
              )
            }}
            margin='dense'
            size='small'
          />
        </Box>
      </Container>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: palette.button.secondary,
          borderBottom: '50px solid transparent',
          borderLeft: `50px solid ${ palette.button.primary }`,
          borderRight: '0px solid transparent',
          borderTop: '0px solid transparent',
          display: 'flex',
          justifyContent: 'center',
          height: 0,
          width: 0,
        }}
      />
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: palette.button.secondary,
          display: 'flex',
          justifyContent: 'center',
          width: 240,
        }}
      >
        <LinkedIn
          color='white'
          sx={{
            marginRight: 1
          }}
        />
        <Facebook
          color='white'
          sx={{
            marginRight: 1
          }}
        />
        <Instagram
          color='white'
        />
      </Box>
    </Box>
  );
}
