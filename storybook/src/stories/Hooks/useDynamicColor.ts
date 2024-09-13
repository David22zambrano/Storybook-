import { useEffect, useState } from 'react';
import { DynamicColor } from '../Utils/dynamicColor';
import { useTheme } from '@mui/material';

export const useDynamicColor = (url: string) => {
  const theme = useTheme();

  const [primary, setPrimary] = useState(theme.palette.primary);
  const [secondary, setSecondary] = useState(theme.palette.secondary);
  const [background, setBackground] = useState(theme.palette.background);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    DynamicColor(url).then(
      ({ primaryColor, secondaryColor, backgroundColor }) => {
        setPrimary(primaryColor);
        setSecondary(secondaryColor);
        setBackground(backgroundColor);
        setLoading(true);
      }
    );
  }, [url]);
  
  theme.palette.primary = primary;
  theme.palette.primary = secondary;
  theme.palette.background = background;
  return { loading };
};

