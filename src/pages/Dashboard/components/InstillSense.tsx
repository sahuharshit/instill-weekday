import { Box, Card, CardContent, Typography } from '@mui/material';
import SenceIcon from '@instill/assets/SenceIcon';
import { SenceStatus } from '../style';
import DonutChart from '@instill/components/DonutChart';

const InstillSense = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={{
        md: 'row',
        xs: 'column',
      }}
      gap={5}
    >
      <Card sx={{ mt: 5, p: 5, width: '100%' }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <SenceIcon />
              <br />
              <Typography fontWeight={600} pt={2} fontSize={24}>
                Instill Sense
              </Typography>
            </Box>

            <SenceStatus>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                <path
                  d="M11.7088 2.11508C10.9466 2.04248 10.1976 1.8709 9.48484 1.60363C8.62363 1.28191 7.82182 0.828212 7.0992 0.252423C6.67684 -0.0841411 6.0862 -0.0841411 5.66385 0.252423C4.94288 0.826562 4.13941 1.28191 3.2782 1.60363C2.56548 1.8709 1.81646 2.04248 1.05424 2.11508C0.453702 2.17282 0 2.66942 0 3.26995V9.00474C0 11.4366 1.35121 13.6243 3.52733 14.7131L5.86183 15.8796C6.02351 15.9604 6.20169 16 6.37987 16C6.55805 16 6.73623 15.9588 6.89957 15.8796L9.23407 14.7131C11.4102 13.6243 12.7614 11.4382 12.7614 9.00474V3.26995C12.763 2.66777 12.3093 2.17282 11.7088 2.11508ZM9.11528 6.87812L6.21489 9.83131C6.106 9.94184 5.95752 10.0045 5.80078 10.0045H5.79913C5.6424 10.0045 5.49392 9.9402 5.38503 9.82801L3.64611 8.0363C3.42339 7.80697 3.42834 7.43906 3.65766 7.21633C3.88699 6.99361 4.2549 6.99856 4.47762 7.22788L5.80408 8.59394L8.28872 6.06476C8.5131 5.83543 8.87936 5.83213 9.10868 6.05651C9.33636 6.28253 9.33966 6.65044 9.11528 6.87812Z"
                  fill="#6ED29C"
                />
              </svg>{' '}
              Safe and secure
            </SenceStatus>
          </Box>

          <Box
            display="flex"
            flexDirection={{
              md: 'row',
              xs: 'column',
            }}
            justifyContent={'space-between'}
            border={'1px solid rgba(0, 0, 0, 0.12)'}
            borderRadius={'10px'}
            p={4}
            mt={4}
          >
            <Box>
              <Typography fontWeight={600} pt={2} fontSize={24} lineHeight={'normal'}>
                Upcoming Meetings
              </Typography>
              <Typography fontSize={40} fontWeight={600} lineHeight={'normal'}>
                12
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={600} pt={2} fontSize={24} lineHeight={'normal'}>
                New Summaries
              </Typography>
              <Typography fontSize={40} fontWeight={600} lineHeight={'normal'}>
                03
              </Typography>
            </Box>
          </Box>

          <Box border={'1px solid rgba(0, 0, 0, 0.12)'} borderRadius={'10px'} p={4} mt={3}>
            <Typography fontWeight={600}>Meetings Sentiments</Typography>
            <Box
              display="flex"
              flexDirection={{
                md: 'row',
                xs: 'column',
              }}
              justifyContent={'space-between'}
              mt={2}
            >
              <Box textAlign="center">
                <DonutChart val={62} color="#6ED29C" />
                Positive
              </Box>
              <Box textAlign="center">
                <DonutChart val={30} color="#FBBF24" />
                Neutral
              </Box>
              <Box textAlign="center">
                <DonutChart val={8} color="#FF3B6B" />
                Negative
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ mt: 5, p: 5, width: '100%' }}>
        <CardContent>sfkjklj</CardContent>
      </Card>
    </Box>
  );
};

export default InstillSense;
