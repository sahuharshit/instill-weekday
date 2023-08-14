import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '100%',
}));

export const Main = styled('div')(() => ({
  width: '100%',
  maxWidth: '100%',
}));

export const PageView = styled('div')(({ theme }) => ({
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingRight: '10px',
  paddingLeft: '10px',
  [theme.breakpoints.up('md')]: {
    paddingTop: '40px',
    paddingBottom: '80px',
    paddingRight: '80px',
    paddingLeft: '80px',
  },
}));
