import { Box, Typography } from '@mui/material';
import { SurveyCard } from '../style';

const PulseSurvey = () => {
  return (
    <Box>
      <Typography color="common.lightGrey" sx={{ fontWeight: 500, textTransform: 'uppercase', lineHeight: '26px' }} gutterBottom>
        This month
      </Typography>
      <Typography fontSize={40} fontWeight={500} lineHeight="normal">
        Pulse Survey
      </Typography>
      <Box display="flex" gap={2} flexWrap="wrap" mt={3}>
        <SurveyCard>
          <Typography fontWeight={600} pb={2}>
            eNPS Score
          </Typography>
          <svg width="113" height="57" viewBox="0 0 113 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M46.208 41.92H41.672V46.576H38.504V41.92H33.968V38.992H38.504V34.336H41.672V38.992H46.208V41.92ZM61.2039 34.408H53.4279V38.512C53.7639 38.096 54.2439 37.76 54.8679 37.504C55.4919 37.232 56.1559 37.096 56.8599 37.096C58.1399 37.096 59.1879 37.376 60.0039 37.936C60.8199 38.496 61.4119 39.216 61.7799 40.096C62.1479 40.96 62.3319 41.888 62.3319 42.88C62.3319 44.72 61.8039 46.2 60.7479 47.32C59.7079 48.44 58.2199 49 56.2839 49C54.4599 49 53.0039 48.544 51.9159 47.632C50.8279 46.72 50.2119 45.528 50.0679 44.056H53.3319C53.4759 44.696 53.7959 45.208 54.2919 45.592C54.8039 45.976 55.4519 46.168 56.2359 46.168C57.1799 46.168 57.8919 45.872 58.3719 45.28C58.8519 44.688 59.0919 43.904 59.0919 42.928C59.0919 41.936 58.8439 41.184 58.3479 40.672C57.8679 40.144 57.1559 39.88 56.2119 39.88C55.5399 39.88 54.9799 40.048 54.5319 40.384C54.0839 40.72 53.7639 41.168 53.5719 41.728H50.3559V31.456H61.2039V34.408ZM64.7452 45.592V42.952L72.5932 31.72H76.5052V42.664H78.6172V45.592H76.5052V49H73.1452V45.592H64.7452ZM73.3612 35.32L68.4412 42.664H73.3612V35.32Z"
              fill="#111111"
            />
            <path
              d="M106.07 56.0352C106.07 42.765 100.799 30.0384 91.4153 20.655C82.0319 11.2715 69.3053 6 56.0352 6C42.765 6 30.0384 11.2715 20.655 20.655C11.2715 30.0384 6 42.765 6 56.0351"
              stroke="#F5F5F5"
              strokeWidth="12"
            />
            <path
              d="M91.3707 20.655C81.9922 11.2715 69.2722 6 56.009 6C42.7458 6 30.0258 11.2715 20.6473 20.655C11.2688 30.0384 6 42.765 6 56.0352"
              stroke="#6ED29C"
              strokeWidth="11"
            />
          </svg>

          <Typography fontSize={14} color={'common.lightGrey'} pt={2}>
            Score is{' '}
            <Typography fontWeight={600} component="span">
              Excellent
            </Typography>
          </Typography>
        </SurveyCard>

        <SurveyCard>
          <Typography fontWeight={600} pb={2}>
            Support from Manager
          </Typography>
          <Typography fontSize={40} color={'#111'} fontWeight={600} lineHeight={'normal'} pb={2}>
            7.5
            <Typography component="span" fontSize={16} fontWeight={400}>
              /10
            </Typography>
          </Typography>

          <Typography fontSize={14} color={'common.lightGrey'}>
            Score &gt; 7 is a &nbsp;
            <Typography fontWeight={600} component="span">
              Good one
            </Typography>
          </Typography>
        </SurveyCard>

        <SurveyCard>
          <Typography fontWeight={600} pb={2}>
            Mission & Values Alignment
          </Typography>
          <Typography fontSize={40} color={'#111'} fontWeight={600} lineHeight={'normal'} pb={2}>
            60
            <Typography component="span" fontSize={16} fontWeight={400}>
              %
            </Typography>
          </Typography>

          <Typography fontSize={14} color={'common.lightGrey'}>
            Score is &nbsp;
            <Typography fontWeight={600} component="span">
              Average
            </Typography>
          </Typography>
        </SurveyCard>

        <SurveyCard>
          <Typography fontWeight={600} pb={2}>
            Performance Feedback
          </Typography>
          <Typography fontSize={40} color={'#111'} fontWeight={600} lineHeight={'normal'} pb={2}>
            4.5
            <Typography component="span" fontSize={16} fontWeight={400}>
              /10
            </Typography>
          </Typography>

          <Typography fontSize={14} fontWeight={600} color={'common.lightGrey'}>
            Need focus &nbsp;
            <Typography fontWeight={400} component="span">
              on this
            </Typography>
          </Typography>
        </SurveyCard>
        <Typography fontSize={14} pt={2}>
          900 Employees{' '}
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
            <ellipse cx="2" cy="1.95918" rx="2" ry="1.95918" fill="#666666" />
          </svg>{' '}
          675 Responses{' '}
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
            <ellipse cx="2" cy="1.95918" rx="2" ry="1.95918" fill="#666666" />
          </svg>{' '}
          3 days remaining
        </Typography>
      </Box>
    </Box>
  );
};
export default PulseSurvey;
