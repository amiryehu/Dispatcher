import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { ReactComponent as Settings } from "../../assets/Icons/settings.svg";

export default function SettingsIcon() {
  return (
    <div>
      <Tooltip title="Coming soon">
        <IconButton>
          <Settings/>
        </IconButton>
      </Tooltip>
    </div>
  );
}
