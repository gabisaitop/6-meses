import { styled } from '@mui/system';
import background from './assets/background.png'
import { Box } from '@mui/material';

export const ContainerBox = styled('div')({
  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${background})`,
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Montserrat, sans-serif',
  color: '#2F2F2F',
  height: '100vh',
  
  '& div' : {
    backgroundColor: 'white',
    padding: '4% 5%',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& h3' : {
      color: '#754387',
      fontSize: '30px',
      fontWeight: '800', 
      margin: '0',
      marginBottom: '-10px'
    },

    '& h4' : {
      color: '#41274A',
      fontSize: '25px',
      fontWeight: '600', 
      margin: '0',
    },

    '& p' : {
      color: '#535353',
      fontWeight: '500', 
      fontSize: '15px',
      marginTop: '10px',
      marginBottom: '15px'
    },

    '& button' : {
      color: 'white',
      backgroundColor: '#754387',
      borderRadius: '50px',
      border: 'none',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600', 
      padding: '10px 50px',
      fontSize: '18px',

      '&:hover' : {
        backgroundColor: '#41274A',
        cursor: 'pointer'
      }
    },
    
  }

});

export const BoxStyled = styled(Box)({
    maxWidth: 400, 
    flexGrow: 1, 
    background: 'white'
})