import { Box, Button, Typography } from '@mui/material';

const ActionItems = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ md: 'row', xs: 'column' }}
        justifyContent={'space-between'}
        border={'1px solid rgba(0, 0, 0, 0.12);'}
        p={'20px 35px'}
        borderRadius={'10px 10px 0px 0px'}
        mt={3}
        gap={2}
      >
        <Box display="flex" gap={'20px'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
            <ellipse cx="24.9253" cy="24" rx="23.98" ry="24" fill="#F5F7F9" />
          </svg>
          <Box>
            <Typography fontSize={16} fontWeight={600} lineHeight={'normal'}>
              Psychological Safety Alert on Sales Team
            </Typography>
            <Typography fontSize={14} color={'common.lightGrey'}>
              Share something vulnerable in your next team meeting.
            </Typography>
          </Box>
        </Box>
        <Button sx={{ background: '#333', color: '#fff', borderRadius: '100px', p: '5px 24px', textTransform: 'uppercase', fontWeight: 600, fontSize: 14 }}>
          Take action
        </Button>
      </Box>

      <Box
        display="flex"
        flexDirection={{ md: 'row', xs: 'column' }}
        justifyContent={'space-between'}
        border={'1px solid rgba(0, 0, 0, 0.12);'}
        borderTop={0}
        p={'20px 35px'}
        gap={2}
      >
        <Box display="flex" gap={'20px'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
            <ellipse cx="24.9253" cy="24" rx="23.98" ry="24" fill="#F5F7F9" />
          </svg>
          <Box>
            <Typography fontSize={16} fontWeight={600} lineHeight={'normal'}>
              You Have a Burnout Alert
            </Typography>
            <Typography fontSize={14} color={'common.lightGrey'}>
              Implement 25 minute meetings for a 5 minute break between calls.
            </Typography>
          </Box>
        </Box>
        <Button sx={{ background: '#333', color: '#fff', borderRadius: '100px', p: '5px 24px', textTransform: 'uppercase', fontWeight: 600, fontSize: 14 }}>
          Take action
        </Button>
      </Box>

      <Box
        display="flex"
        flexDirection={{ md: 'row', xs: 'column' }}
        justifyContent={'space-between'}
        border={'1px solid rgba(0, 0, 0, 0.12);'}
        borderTop={0}
        p={'20px 35px'}
        gap={2}
      >
        <Box display="flex" gap={'20px'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
            <ellipse cx="24.9253" cy="24" rx="23.98" ry="24" fill="#F5F7F9" />
          </svg>
          <Box>
            <Typography fontSize={16} fontWeight={600} lineHeight={'normal'}>
              Inclusion Scores are Trending Down with New Teammates
            </Typography>
            <Typography fontSize={14} color={'common.lightGrey'}>
              Ask their opinion in next meeting.
            </Typography>
          </Box>
        </Box>
        <Button sx={{ background: '#333', color: '#fff', borderRadius: '100px', p: '5px 24px', textTransform: 'uppercase', fontWeight: 600, fontSize: 14 }}>
          Take action
        </Button>
      </Box>
    </>
  );
};

export default ActionItems;
