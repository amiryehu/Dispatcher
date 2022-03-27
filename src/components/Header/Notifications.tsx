import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Notifications from '../../assets/Icons/notifications.svg';

export default function NotificationsIcon() {
  return (
    <div>
      <Tooltip title="Coming soon">
        <IconButton>
            <img src={Notifications}/>
        </IconButton>
      </Tooltip>
    </div>
  );
}