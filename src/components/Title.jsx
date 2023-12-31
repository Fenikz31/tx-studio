import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Title({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between' ,
        mt: 8      
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'         
        }}
      >
        <Typography fontWeight={ 600 } variant='h3'>
          Acheter / Louer
        </Typography>
        <Typography color='#595959' fontWeight={ 600 }  variant='h3'>
          Votre futur bien
        </Typography>
      </Box>
      <Box>
        { children }
      </Box>
    </Box>
  )
}