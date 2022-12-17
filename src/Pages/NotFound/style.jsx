import { grid, styled } from '@mui/system';

export const ContainerBox = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Montserrat, sans-serif',
  color: '#2F2F2F',


  '& img' : {
    width: "300px",
},

'& p' : {
  fontWeight: "700",
},

'& h2' : {
  color: '#E2B301',
  margin: '0',
  padding: '0',
},

'& div' : {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',

  '& input' : {
    width: "300px",
    padding: '10px',
    borderRadius: '50px',
    border: '2px solid #2F2F2F',
    fontWeight: "600",
  },

  '& img' : {
    width: "25px",
    marginLeft: '10px',
    cursor: 'pointer',
  },
},
    
});
