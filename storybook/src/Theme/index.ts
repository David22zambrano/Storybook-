import { createTheme } from '@mui/material/styles';
import { ERPTheme, ADPROTheme, ADCTheme } from './theme';

export const SincoTheme = createTheme({
  ...ERPTheme
})

export let AdproSincoTheme = createTheme({
  ...ADPROTheme
})

export let ADCSincoTheme = createTheme({
  ...ADCTheme
})
