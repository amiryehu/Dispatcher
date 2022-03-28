import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from "../../assets/Icons/settings.svg";


export default function SettingsIcon() {
  return (
    <div>
      <Tooltip title="Coming soon">
        <IconButton>
          <img src={Settings} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
