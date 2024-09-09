import type { Meta } from "@storybook/react";
import {
  Button,
  ThemeProvider,
  Typography,
  Box,
  TextField,
} from "@mui/material";

import { DrawerComponent } from "./drawer";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof DrawerComponent> = {
  title: "Components/Drawer",
  component: DrawerComponent,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;
export const Drawer = {
  name: "Drawer",
  args: {
    anchorActions: "flex-start",
    open: false,
    width: "500px",
    title: "Nombre empresa",
    anchor: "left",
    children: (
      <>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          textAlign="center"
          gap={1}
          pb={2}
        >
          <TextField label="Nombre" variant="outlined" size="small" />
          <TextField label="Apellido" variant="outlined" size="small" />
          <TextField
            label="Edad"
            variant="outlined"
            size="small"
            type="number"
          />
          <TextField label="Cargo" variant="outlined" size="small" />
        </Box>
        <Typography variant="body2" color="text.primary">
          Al hacer click en algun elemento del contenido del drawer se muestran
          las acciones
        </Typography>
      </>
    ),
    actions: (
      <Box alignItems="flex-end">
        <Button color="primary" variant="text" size="small">
          Cerrar
        </Button>
        <Button color="primary" variant="contained" size="small">
          Guardar
        </Button>
      </Box>
    ),
  },
};