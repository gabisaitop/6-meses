import { borderRadius, styled } from '@mui/system';

export const ContainerBox = styled('div')({
  marginLeft: '100px',
  fontFamily: 'Montserrat, sans-serif'
});

export const ContainerTitle = styled('div')({ 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#41274A',

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

export const CardsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '75%'
});

export const CardsBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '60px'
})

export const GeneratorContainer = styled('div')({
  backgroundColor: '#41274A',
  width: '35%',
  borderRadius: '8px',
  color: 'white',
  padding: '15px',

  '& button' : {
    color: '#41274A',
    backgroundColor: 'white',
    borderRadius: '50px',
    border: 'none',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700', 
    padding: '10px 50px',
    fontSize: '14px',
    cursor: 'pointer'
  },

  '& img' : {
    cursor: 'pointer'
  }
})

export const ButtonBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
})

export const GeneratorBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
})

export const FavoriteBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#1E1E1E',
  gap: '20px',
  marginTop: '30px',
  
  '& p' : {
    fontWeight: '800',
    fontSize: '25px',
},
'& img' : {
  cursor: 'pointer'
}
})