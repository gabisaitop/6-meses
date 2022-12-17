import { styled } from '@mui/system';

export const CardsContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: '15% 15% 15%',
    gap: '50px 75px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 20px',
    marginLeft: '-50px',    
});

export const ContainerTitle = styled('div')({ 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#41274A',
  fontFamily: 'Montserrat, sans-serif',

  '& h1' : {
    borderRadius: '8px 8px 0 0',
    positions: 'relative',
    textTransform: 'upperCase',
    fontWeight: '800',
    marginBottom: '20px',
    marginTop: '5%'
},

'& p' : {
  width: "60%",
  borderRadius: '8px 8px 0 0',
  positions: 'relative',
  textAlign: 'center',
  marginTop: '0',
  lineHeight: '1.1',
},
})


export const ContainerBox = styled('div')({
  backgroundColor: '#FFFFFF',
  marginLeft: '100px',

});
