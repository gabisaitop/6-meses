import { grid, styled } from '@mui/system';

export const ContainerBox = styled('div')({
  fontFamily: 'Montserrat, sans-serif',
  marginLeft: '100px',
});

export const Container1 = styled('div')({
  backgroundColor: '#E4E4D7',
  display: 'flex',
  gap: '50px',
  '& div' : {
    width: '50%',
    '& h1' : {
      fontWeight: '800',
      color: '#41274A'
    },
    '& p' : {
      fontWeight: '700'
    },
    '& h5' : {
      fontWeight: '600',
      fontSize: '14px'
    },
    '& img' : {
      marginLeft: '150px'
    },
  },
  '& img' : {
    width: '50%'
  },
  padding: '5%',
});

export const Container2 = styled('div')({
  backgroundColor: '#AD8DB2',
  display: 'flex',
  alignItems: 'center',

  '& div' : {
    width: '50%'
  },
  '& img' : {
    width: '50%'
  },
  padding: '5%',

});

export const Container3 = styled('div')({
  backgroundColor: '#D9D9D9',
  top: '0',
  display: 'flex',
  alignItems: 'center',
  
  '& div' : {
    width: '50%'
  },
  '& img' : {
    width: '50%'
  },
  padding: '5%',

});