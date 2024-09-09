import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import type { Meta } from "@storybook/react";
import { DrawerComponent } from "@sinco/react";
import { Button, ThemeProvider, Typography, Box, TextField } from "@mui/material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof DrawerComponent> = {
  title: "Sinco React/Drawer",
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