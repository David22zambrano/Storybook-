import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';

interface FooterActionsProperties {
  labelChangeCounter: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const FooterAction = ({
  leftContent,
  rightContent,
  labelChangeCounter,
}: FooterActionsProperties) => {
  return (
    <AppBar position="fixed" color="inherit" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ gap: 1.5, minHeight: '50px !important' }}>
        {leftContent}
        <Box flexGrow={1} />
        <Box>{labelChangeCounter}</Box>
        {rightContent}
      </Toolbar>
    </AppBar>
  );
};

