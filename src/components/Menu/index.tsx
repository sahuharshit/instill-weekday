import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

const Menu = () => {
  return (
    <MenuList>
      <MenuItem disableGutters>
        <ViewQuiltOutlinedIcon color="primary" />
      </MenuItem>

      <MenuItem disableGutters>
        <EqualizerOutlinedIcon className="menuIcon" />
      </MenuItem>

      <MenuItem disableGutters>
        <PieChartOutlineOutlinedIcon className="menuIcon" />
      </MenuItem>

      <MenuItem disableGutters>
        <TimelineOutlinedIcon className="menuIcon" />
      </MenuItem>

      <MenuItem disableGutters>
        <PeopleAltOutlinedIcon className="menuIcon" />
      </MenuItem>

      <MenuItem disableGutters>
        <WorkOutlineOutlinedIcon className="menuIcon" />
      </MenuItem>

      <MenuItem disableGutters>
        <TipsAndUpdatesOutlinedIcon className="menuIcon" />
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
