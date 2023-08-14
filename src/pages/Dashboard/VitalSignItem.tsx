import jsonData from '@instill/Mock/data.json';
import DonutChart from '@instill/components/DonutChart';
import Box from '@mui/material/Box';

import { VitalSignCard, VitalSignContainer } from './style';
import Typography from '@mui/material/Typography';

const VitalSignItem = () => {
  return (
    <VitalSignContainer>
      {jsonData.dashboard.vitalsign.map((card) => (
        <Box key={card.id} display={'flex'}>
          <VitalSignCard>
            <Typography fontWeight={600} pb={2}>
              {card.name}
            </Typography>
            <DonutChart val={card.value} />

            <Typography textAlign={'center'} sx={{ fontSize: 14, fontWeight: 500, color: card.status == 'up' ? '#6ED29C' : '#FF3B6B' }} gutterBottom>
              {card.status == 'up' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.81161 4.95443C8.93224 4.83387 9 4.67039 9 4.49992C9 4.32946 8.93224 4.16597 8.81161 4.04542L4.95102 0.188222C4.83036 0.0677036 4.66673 0 4.49612 0C4.3255 0 4.16187 0.0677036 4.04121 0.188222L0.180619 4.04542C0.0634126 4.16666 -0.00144168 4.32905 2.43234e-05 4.49761C0.00149033 4.66617 0.0691594 4.82741 0.188457 4.9466C0.307754 5.06579 0.469135 5.1334 0.637841 5.13486C0.806546 5.13633 0.969079 5.07153 1.09043 4.95443L3.85268 2.19461L3.85268 9.64285C3.85268 9.81335 3.92047 9.97686 4.04114 10.0974C4.16181 10.218 4.32547 10.2857 4.49612 10.2857C4.66676 10.2857 4.83042 10.218 4.95109 10.0974C5.07176 9.97686 5.13955 9.81335 5.13955 9.64285L5.13955 2.19461L7.9018 4.95443C8.02246 5.07495 8.18609 5.14265 8.35671 5.14265C8.52732 5.14265 8.69095 5.07495 8.81161 4.95443Z"
                    fill="#6ED29C"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.81161 5.33463C8.93224 5.45519 9 5.61867 9 5.78914C9 5.9596 8.93224 6.12309 8.81161 6.24365L4.95102 10.1008C4.83036 10.2214 4.66673 10.2891 4.49612 10.2891C4.3255 10.2891 4.16187 10.2214 4.04121 10.1008L0.180619 6.24365C0.0634126 6.1224 -0.00144168 5.96001 2.43234e-05 5.79145C0.00149033 5.6229 0.0691594 5.46166 0.188457 5.34246C0.307754 5.22327 0.469135 5.15566 0.637841 5.1542C0.806546 5.15273 0.969079 5.21753 1.09043 5.33463L3.85268 8.09446L3.85268 0.646214C3.85268 0.475715 3.92047 0.312199 4.04114 0.191638C4.16181 0.0710773 4.32547 0.0033474 4.49612 0.0033474C4.66676 0.0033474 4.83042 0.0710773 4.95109 0.191638C5.07176 0.312199 5.13955 0.475715 5.13955 0.646214L5.13955 8.09446L7.9018 5.33463C8.02246 5.21411 8.18609 5.14641 8.35671 5.14641C8.52732 5.14641 8.69095 5.21411 8.81161 5.33463Z"
                    fill="#FF3B6B"
                  />
                </svg>
              )}{' '}
              {card.stats}%
            </Typography>
          </VitalSignCard>
        </Box>
      ))}
    </VitalSignContainer>
  );
};

export default VitalSignItem;
