import { styled } from '@mui/material/styles';

export const LogoCircle = styled('div')(() => ({
  background: 'white',
  border: '1px solid rgba(0, 0, 0, 0.10)',
  borderRadius: '87px',
  boxShadow: '0px 4px 8px 0px rgba(22, 16, 91, 0.05)',
  padding: '6px 12px',
}));

export const VitalSignContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  justifyContent: 'space-between',
  paddingTop: 30,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const VitalSignCard = styled('div')(() => ({
  width: 200,
  height: 240,
  borderRadius: 10,
  background: '#FAFAFA',
  padding: '16px',
}));

export const SenceStatus = styled('div')(() => ({
  borderRadius: '10px',
  background: 'rgba(110, 210, 156, 0.10)',
  alignSelf: 'baseline',
  padding: '8px 12px',
  display: 'flex',
  gap: '5px',
}));
