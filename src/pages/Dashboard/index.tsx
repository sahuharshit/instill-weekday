import { Apple } from '@instill/assets/Apple';
import AppLayout from '@instill/layout/AppLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LogoCircle } from './style';
import VitalSigns from './VitalSigns';

function Dashboard() {
  return (
    <AppLayout>
      <>
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <LogoCircle>
            <Apple />
          </LogoCircle>
          <Typography variant="h1" component="h2" sx={{ textTransform: 'uppercase', fontWeight: 600 }}>
            Apple Culture Dashboard
          </Typography>
        </Box>
        <Box pt={5}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: {
                md: 56,
                xs: 26,
              },
              lineHeight: '56px',
              fontWeight: 600,
            }}
          >
            Hi, Tim
          </Typography>
          <Typography color="common.darkGrey">CEO, Apple Inc</Typography>
        </Box>
        <VitalSigns />
      </>
    </AppLayout>
  );
}

export default Dashboard;
