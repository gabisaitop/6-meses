import { styled } from '@mui/system';
import { Box } from "@mui/material";

export const TextField = styled('input')({
  width: '45px',
  height: '45px',
  textAlign: 'center',
  backgroundColor: 'white',
  border: '2px solid #41274A',
  outline: 'none',
  fontSize: '25px',
  margin: 'auto 5px',
  borderRadius: '6px',
  color: '#41274A',
  fontWeight: '500',
  fontFamily: 'Montserrat, sans-serif'
});

export const ButtonSubmit = styled('button')({

  '& button': {
    color: 'white',
    backgroundColor: '#754387',
    borderRadius: '50px',
    border: 'none',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '600',
    padding: '10px 50px',
    fontSize: '18px',

    '&:hover': {
      backgroundColor: '#41274A',
      cursor: 'pointer',
      
    }
  }
})

export const BoxContainer = styled(Box)({
  border: '1px solid purple'
})