import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function AccessibilityTooltips() {
  return (
    <div>
      <Tooltip title="Coming soon">
        <IconButton>
          settings icon
        </IconButton>
      </Tooltip>
    </div>
  );
}
