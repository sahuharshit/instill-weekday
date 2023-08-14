import { theme } from '@instill/constants/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import { HeaderWrapper, Search, SearchIconWrapper, StyledInputBase } from './style';

interface IPorps {
  toggle: (arg: boolean) => void;
}

const Header = ({ toggle }: IPorps) => {
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="transparent">
      <HeaderWrapper>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
        <Box sx={{ mr: 4 }}>
          Tim Cook
          <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>

        {isMobileMode && (
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }} onClick={() => toggle(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </HeaderWrapper>
    </AppBar>
  );
};

export default Header;
