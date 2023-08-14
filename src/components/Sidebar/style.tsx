import { styled } from '@mui/material/styles';

export const SidebarContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '25px 10px',
  background: '#111',
  minHeight: '100vh',
  height: 'auto',
}));
