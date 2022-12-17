import { styled } from '@mui/system';

export const CardContainer = styled('div')({
    backgroundColor: '#41274A',
    width: '230px',
    borderRadius: '8px',
    margin: '0 auto',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '11px',
    boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',

    '& img' : {
        width: "230px",
        borderRadius: '8px 8px 0 0',
        positions: 'relative',
    },

    '& p, h3' : {
        color: '#FFFFFF',
        margin: '0',
        paddingLeft: '5%',
        paddingRight: '5%',
    },

    '& h3' : {
        paddingTop: '5%'
    },

    '& p' : {
        paddingBottom: '5%'
    }
});
