import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PendingIcon from '@mui/icons-material/Pending';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Tooltip from '@mui/material/Tooltip';

export default function BottomNavigationBar() {
    
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 , marginY:2 ,display:{xs:"none",md:"block"}}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      > 
      <Tooltip  title="Pending">
         <BottomNavigationAction label="Pending" icon={<PendingIcon />} />
      </Tooltip>
        <Tooltip title="Favorites">
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Tooltip>
        <Tooltip title="Completed">
        <BottomNavigationAction label="Completed" icon={<CheckCircleIcon/>} />
        </Tooltip>
      </BottomNavigation>
    </Box>
  );
}
