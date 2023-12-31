import { useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import FormControlLabel from '@mui/material/FormControlLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import Camera from '@mui/icons-material/PhotoCamera';
import CheckBox from '@mui/icons-material/CheckBox';
import Notifications from '@mui/icons-material/Notifications';

import Header from '@components/Header';
import SocialBanner from '@components/SocialBanner';
import Title from '@components/Title';

import EnveloppeFull from '@icons/Enveloppe';
import FavoriteEmpty from '@icons/FavoriteEmpty';
import Magnify from '@icons/Magnify';
import Phone from '@icons/Phone';

import Logo from '@assets/Logo.png'

function App() {
  const { palette } = useTheme();
  const [ anchorEl, setAnchorEl ] = useState( null );
  const [ extended, setExtended ] = useState( false );
  const [ selected, setSelected ] = useState( null );
  const open = Boolean( anchorEl );

  const filters = [
    {
      id: 'project',
      label: 'Projet',
      question: 'Vous souhaitez ?',
      type: 'checkbox',
      options: [
        'Acheter',
        'Louer'
      ]
    },
    {
      id: 'products',
      label: 'Type(s) de bien',
      question: 'Quel type de bien ?',
      type: 'checkbox',
      options: [
        'Maison',
        'Appartement',
        'Terrain',
        'Immeuble',
        'Parking',
        'Immobilier professionnel'
      ]
    },
    {
      id: 'localization',
      label: 'Localisation',
      question: 'A quel endroit ?',
      type: 'select',
      placeholder: 'Quartier, Ville, Code Postal...'
    },
    {
      id: 'price',
      label: 'Prix Min/Max',
      question: 'Quel est votre budget ?',
      type: 'text'
    },
    {
      id: 'rooms',
      label: 'Pièces',
      question: 'Combien de pièces ?',
      type: 'checkbox',
      options: [
        '1 pièce',
        '2 pièces',
        '3 pièces',
        '4 pièces',
        '5 pièces',
        '6 pièces et +'
      ]
    },
    {
      id: 'surface',
      label: 'Surface',
      question: 'Surface ?',
      type: 'slider'
    },
    {
      id: 'criteria',
      label: '+ de critères',
      question: 'Affiner votre recherche',
      type: 'custom'
    },
    {
      id: 'search',
      label: 'Rechercher',
      question: 'Affiner votre recherche',
      icon: Magnify,
      type: 'action'
    },
  ];

  const products= [
    {
      type: 'Maison',
      rooms: 3,
      price: '285 000',
      surface: 46,
      location: 'Villepinte',
      pictures: 10,
      src: './src/assets/pexels-photo-2119713.jpg',
    },
    {
      type: 'Maison',
      rooms: 8,
      price: '385 000',
      surface: 116,
      location: 'Nantes',
      pictures: 17,
      src: './src/assets/pexels-photo-106399.jpg',
    },
    {
      type: 'Appartement',
      rooms: 4,
      price: '285 000',
      surface: 90,
      location: 'Jointville-Le-Pont',
      pictures: 8,
      src: './src/assets/pexels-photo-1918291.jpg',
    },
    {
      type: 'Maison',
      rooms: 6,
      price: '285 000',
      surface: 116,
      location: 'Villepinte',
      pictures: 11,
      src: './src/assets/pexels-photo-5825527.jpg',
    },
    {
      type: 'Maison',
      rooms: 6,
      price: '285 000',
      surface: 116,
      location: 'Villepinte',
      pictures: 10,
      src: './src/assets/pexels-photo-2119713.jpg',
    },
    {
      type: 'Maison',
      rooms: 8,
      price: '385 000',
      surface: 116,
      location: 'Nantes',
      pictures: 17,
      src: './src/assets/pexels-photo-106399.jpg',
    },
    {
      type: 'Appartement',
      rooms: 4,
      price: '285 000',
      surface: 90,
      location: 'Jointville-Le-Pont',
      pictures: 8,
      src: './src/assets/pexels-photo-1918291.jpg',
    },
    {
      type: 'Maison',
      rooms: 6,
      price: '285 000',
      surface: 116,
      location: 'Villepinte',
      pictures: 11,
      src: './src/assets/pexels-photo-5825527.jpg',
    },
  ];

  function AlertButton({ extended }) {
    return (
      <Fab
        sx={{
          backgroundColor: palette.button.primary,
          color: 'white',
          '&:hover' :{
            backgroundColor: palette.button.primary
          }
        }}
        size='small'
        variant='extended'
        onPointerOver={ onPointerOver }
        onPointerLeave={ onPointerLeave }
        autoCapitalize='none'
      >
        <Notifications/>
        { extended ?  'Créer une alerte' : null}
      </Fab>
    )
  }

  function Filters ({ filters = [], onClick = () => null }) {
    if ( filters.length === 0 )
      return null;

    return (
      <>
        {
          filters.map(( filter, idx ) => (
            <Typography
              key={ idx }
              id={ filter.id }
              fontWeight={ 500 }
              onClick={ onClick }
              variant='subtitle1'
              aria-controls={ open ? filter.id : undefined }
              aria-haspopup='true'
              aria-expanded={ open ? 'true' : undefined }
            >
              { filter.label }
            </Typography>
          ))
        }
      </>
    )
  }

  function handleClose() {
    setAnchorEl( null )
  }

  function handleFilterClick( e ) {
    setAnchorEl( e.currentTarget )
    setSelected( e.target.id )
  }

  function onPointerOver( e ) {
    if ( e.type === 'pointerover' ) {
      setExtended( true );
    }
  }

  function onPointerLeave( e ) {
    if ( e.type === 'pointerleave' ) {
      setExtended( false );
    }
  }

  function RenderCards ({
    products =[]
  }) {
    if ( products.length === 0 )
      return null

    return (
      <>
        <Box 
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
          }}
        >
          {
            products.map(( product, idx ) => (
              <Box
                id={ `product-${ idx }` }
                key={ idx } 
                sx={{
                  pb: 2
                }}
              >
                {
                  product.pictures && product.pictures > 0 ?
                  <Box
                    sx={{
                      alignItems: 'center',
                      bgcolor: '#FFFFFF66',
                      display: 'flex',
                      borderRadius: '10px',
                      left: 215,
                      top: 50,
                      width: 50,
                      height: 40,
                      justifyContent: 'space-evenly',
                      position: 'relative'
                    }}
                  >
                    <Camera />
                    <Typography fontSize={ 14 } variant="subtitle2">
                      { product.pictures }
                    </Typography>
                  </Box>
                  : null
                }
                <Card
                  key={ idx }
                  sx={{
                    borderRadius: 10,
                    width: 300
                  }}
                >
                  <CardMedia
                    component='img'
                    height='300'
                    width='300'
                    image={ product.src }
                  />
                </Card>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      width: '70%',
                      color: '#929292'
                    }}
                  >
                    <Typography fontSize={ 11 } fontWeight={ 600 } pr={ 0.4 } variant="subtitle1">
                      { product.type }
                    </Typography>
                    <Typography fontSize={ 11 } fontWeight={ 600 } pr={ 0.4 } variant="subtitle1">
                      { product.rooms } pièces
                    </Typography>
                    <Typography fontSize={ 11 } fontWeight={ 600 } variant="subtitle1">
                      { product.surface }m²
                    </Typography>
                  </Box>
                  <Typography fontSize={ 11 } fontWeight={ 600 } variant="subtitle2">
                    { product.price }€
                  </Typography>
                </Box>
                  <Typography fontSize={ 11 } variant="subtitle2">
                    { product.location }
                  </Typography>
                <Box>
                  <Button
                    variant='text'
                    sx={{
                      color: palette.button.inactive,
                      fontSize: 11,
                      textTransform: 'none'
                    }}
                    size='small'
                    startIcon={ <FavoriteEmpty color={ palette.button.inactive } fontSize="small"/> }
                  >
                    Favoris
                  </Button>
                  <Button
                    variant='text'
                    sx={{
                      color: palette.button.primary,
                      fontSize: 11,
                      textTransform: 'none'
                    }}
                    size='small'
                    startIcon={ <EnveloppeFull fontSize="small" color={ palette.button.primary }/> }
                  >
                    Message
                  </Button>
                </Box>
              </Box>
            ))
          }
        </Box>
      </>
    );
  }

  // TODO: Fix Menu position
  function RenderFilterMenus({ anchorEl = null }) {
    const item = filters.filter(({ id }) => id === selected )[ 0 ]
    return (
      <Menu
        id={ selected }
        anchorEl={ anchorEl }
        aria-labelledby={ selected }
        open={ open }
        onClose={ handleClose }
        MenuListProps={{
          'aria-labelledby': selected,
          sx: {
            minWidth: 300
          }
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <RenderItems item={ item } />
      </Menu>
    )
  }

  // TODO: Finish Menu visual
  function RenderItems({ item = null }) {
    if ( item === null )
      return null;

    switch ( item.type ) {
      case 'action':
        return null

      case 'checkbox':
        return (
          <>
            { item.question }
            {
              item.options.map(( option, key ) =>(
                <MenuItem
                  key={ key }
                  sx={{
                    height: '100%',
                    p: 1,
                    width: '100%'
                  }}
                >
                  <FormControlLabel
                    control={ <CheckBox checked={ false } /> }
                    key={ key }
                    label={ option }
                    size='small'
                  />
                </MenuItem>
              ))
            }
          </>
        )

      case 'select':
        return (
          <>
            { item.question }
            <Select
              id={ item.id }
              key={ item.id }
              label={ item.placeholder }
              value=''
              autoWidth
              size='small'
              sx={{
                height: '100%',
                p: 1,
                width: '100%'
              }}
              MenuProps={{
                MenuListProps: {
                  sx: {
                    width: '100%'
                  }
                },
                slotProps: {
                  paper: {
                    width: '100%'
                  },
                  root: {
                    width: '100%'
                  }
                }
              }}
            />
          </>
        )

      case 'slider':
        return (
          <>
            { item.question }
            <Slider />
          </>
        )

      case 'text':
        return (
          <>
            { item.question }
            <TextField
              id={ item.id }
              key={ item.id }
              label={ item.placeholder }
              value=''
              autoWidth
              size='small'
              sx={{
                height: '100%',
                p: 1,
                width: '100%'
              }}
            />
          </>
        )
    }

  }

  return (
    <>
      <Header />
      <Container
        id='body'
        sx={{
          height: '100%'
        }}
      >
        <Title>
          <AlertButton extended={ extended } />
        </Title>

        <Paper
          elevation={ 1 }
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-around',
            borderRadius: 20,
            mt: 8,
            p: 2
          }}
        >
          <Filters filters={ filters } onClick={ handleFilterClick } />
        </Paper>
        <RenderFilterMenus anchorEl={ anchorEl }/>
        <Box
          id='feed-container'
          sx={{
            mt: 8,
            height: '100%',
            width: '100%',
            display: 'flex'
          }}
        >
          <Box>
            <RenderCards products={ products } /> 
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Pagination
                count={ 3 }
                color='custom-primary'
                defaultPage={ 1 }
                variant='outlined'
                shape='rounded'
                renderItem={( item ) => (
                  <PaginationItem
                    sx={{
                      color: palette.button.primary,
                      borderColor: palette.button.primary,
                      '& MuiButtonBase-root-MuiPaginationItem-root .Mui-selected': {
                        bgColor: palette.button.primary,
                        color: 'white'
                      }
                    }}
                    {...item}
                  />
                )}
              />
            </Box>       
          </Box>
          <Box
            id='map'
            sx={{
              height: '100%',
              width: '90%',
              pl: 2,
              pr: 2
            }}
          >
            <Card
              sx={{
                borderRadius: 10,
                minWidth: 400
              }}
            >
              <CardMedia
                component='img'
                height='600'
                image='./src/assets/carte2.jpg'
              />
              </Card>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 2
                }}
              >
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#394460',
                  borderRadius: 15,
                  color: 'default',
                  fontSize: 11,
                  textTransform: 'none'
                }}
                size='small'
              >
                Prendre rendez-vous avec nos agents
              </Button>
              </Box>
          </Box>
        </Box>
      </Container>
      <SocialBanner />
      <Container
        id='footer'
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 8,
            mt: 8,
            width: '100%'
          }}
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
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >            
            <Typography fontSize={ 16 } fontWeight={ 600 } variant="subtitle2">
              Acheter
            </Typography>
            <Typography fontSize={ 16 } fontWeight={ 600 } variant="subtitle2">
              Louer
            </Typography>
            <Typography fontSize={ 16 } fontWeight={ 600 } variant="subtitle2">
              Gestion
            </Typography>
            <Typography fontSize={ 16 } fontWeight={ 600 } variant="subtitle2">
              Notre agence
            </Typography>
            <Typography fontSize={ 16 } fontWeight={ 600 } variant="subtitle2">
              Contact
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >            
            <Typography fontSize={ 16 } fontWeight={ 600 } variant="subtitle2">
              Estimer
            </Typography>
            <Typography fontSize={ 16 } variant="subtitle2">
              En ligne
            </Typography>
            <Typography fontSize={ 16 } variant="subtitle2">
              En agence
            </Typography>
            <Typography fontSize={ 16 } fontWeight={ 600 } marginTop={ 1 } variant="subtitle2">
              Investisseur
            </Typography>
            <Typography fontSize={ 16 } fontWeight={ 600 } variant="subtitle2">
              Entreprise
            </Typography>
            <Typography fontSize={ 16 } variant="subtitle2">
              Louer
            </Typography>
            <Typography fontSize={ 16 } variant="subtitle2">
              Acheter
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >            
            <Typography fontSize={ 16 } fontWeight={ 600 } marginBottom={ 2 } variant='subtitle2'>
              Nos honoraires
            </Typography>
            <Typography fontSize={ 16 } fontWeight={ 600 } marginBottom={ 2 } variant='subtitle2'>
              Mentions légales
            </Typography>
            <Typography fontSize={ 16 } fontWeight={ 600 } marginBottom={ 1 } variant='subtitle2'>
              Contact
            </Typography>
            <Typography fontSize={ 16 } variant='subtitle2'>
              Nous contacter du mardi au samedi
            </Typography>
            <Typography fontSize={ 16 } marginBottom={ 1 } variant='subtitle2'>
              9h30-12h30 / 14h-19h
            </Typography>
            <Typography fontSize={ 16 } marginBottom={ 1 } variant='subtitle2'>
              01 64 27 83 34
            </Typography>
            <Typography fontSize={ 16 } variant='subtitle2'>
              contact@MiltryMoryOrpi.fr
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              width: 300
            }}
          >
            <Phone color={ palette.button.primary } sx={{
              marginBottom: 1.5
            }} />
            <Typography fontSize={ 16 } marginBottom={ 1 } variant='subtitle2'>
              Téléphone: 01 64 27 83 34
            </Typography>
            <Typography fontSize={ 16 } fontWeight={ 700 } marginBottom={ 1 } variant='subtitle2'>
              DES RECLAMATIONS?
            </Typography>
            <TextField
              placeholder='Votre e-mail*'
              fullWidth
              InputProps={{
                'aria-label': 'search',
                style: {
                  borderColor: palette.button.primary,
                  borderRadius: 15,
                  paddingRight: 4,
                  backgroundColor: 'white',
                  '&:hover': {
                    borderColor: palette.button.primary
                  }
                }
              }}
              sx={{
                alignItems: 'center',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 20,
                  height: 32,
                  '& fieldset': {
                    borderColor: palette.button.primary,
                  },
                  '&:hover fieldset': {
                    borderColor: palette.button.primary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: palette.button.primary,
                  },
                },
                marginBottom: 2
              }}
            />
            <TextField
              fullWidth
              multiline
              rows={ 3 }
              sx={{
                alignItems: 'center',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 5,
                  '& fieldset': {
                    borderColor: palette.button.primary,
                  },
                  '&:hover fieldset': {
                    borderColor: palette.button.primary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: palette.button.primary,
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default App;
