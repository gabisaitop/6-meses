import { styled } from '@mui/system';

export const NavContainer = styled('div')({
    backgroundColor: '#41274A',
    width: '100px',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '30px',
    paddingTop: '3%',
    position: 'fixed',
    top: '0',

    '& img' : {
        width: "30px",
        cursor: 'pointer'
    },
});
