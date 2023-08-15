import { Link } from 'react-router-dom';
import { theme } from '@instill/constants/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Logo from '@instill/assets/instill_logo.png';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Menu from '../Menu';
import { SidebarContainer } from './style';

interface IPorps {
  open: boolean;
  toggle: (arg: boolean) => void;
}

const Sidebar = ({ open, toggle }: IPorps) => {
  /* checking if the user is accessing the application from an iOS device */
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  const SideBarNode = () => {
    return (
      <SidebarContainer>
        <Link to={'/'}>
          <img src={Logo} alt="instill" className="logo" />
        </Link>
        <Menu />
      </SidebarContainer>
    );
  };

  return (
    <>
      {isMobileMode ? (
        <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={open} onClose={() => toggle(false)} onOpen={() => toggle(true)}>
          <SideBarNode />
        </SwipeableDrawer>
      ) : (
        <SideBarNode />
      )}
    </>
  );
};

export default Sidebar;
