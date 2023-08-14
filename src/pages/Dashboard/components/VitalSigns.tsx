import { Card, CardContent, Typography } from '@mui/material';
import VitalSignItem from './VitalSignItem';

const VitalSigns = () => {
  return (
    <Card sx={{ marginTop: 5, p: 5 }}>
      <CardContent>
        <Typography color="common.lightGrey" sx={{ fontWeight: 500, textTransform: 'uppercase', lineHeight: '26px' }} gutterBottom>
          This month
        </Typography>
        <Typography
          sx={{
            fontSize: {
              md: 40,
              xs: 20,
            },
            fontWeight: 500,
            pt: 1,
          }}
          gutterBottom
        >
          Culture Vital Signs
        </Typography>
        <VitalSignItem />
      </CardContent>
    </Card>
  );
};

export default VitalSigns;
