/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  ThemeProvider,
  Typography,
  Box,
  TextField,
  Stack,
} from "@mui/material";

import { SincoTheme } from "../Theme";
import { Drawer } from "./drawer";
import { useCallback, useState } from "react";

const meta: Meta<typeof Drawer> = {
  title: "Sinco React/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      description: "Titulo del drawer",
      control: "text",
    },
    onClose: {
      description: "((event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element> | TouchEvent<Element>) => void)"
    },
    actions: {
      description: "ReactNode",
    },
    anchorActions: {
      description: "Determina la posicion de las acciones en eje horizontal",
      control: "text"
    },
    showActions: {
      description: "Si es `true` las actiones se muestran siempre fijas las acciones  "
    },
    headerColor: {
      description: "Background-color del header",
      control: "text"
    },
    open: {
      description: "Si `true`, se muestra el componente."
    }
  },
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const DrawerStory: Story = {
  name: "Sinco Drawer",
  args: {
    width: "500px",
    title: "Titulo drawer",
    anchor: "right",
    anchorActions: "flex-end",
    headerColor: "text.primary",
    children: "Contenido del drawer",
    onClose: () => { }
  },
  render: ({ children, anchorActions, title, width, anchor, backgroundColor, color, headerColor }) => {
    const [state, setState] = useState(false);
    const handleDrawerState = useCallback(() => {
      setState((prevOpen) => !prevOpen);
    }, []);

    return (
      <>
        <Button variant="contained" size="medium" color="primary" onClick={handleDrawerState}>
          Click para mostrar / Ocultar
        </Button>
        <Drawer
          onClose={handleDrawerState}
          open={state}
          color={color}
          width={width}
          title={title}
          anchor={anchor}
          backgroundColor={backgroundColor}
          anchorActions={anchorActions}
          headerColor={headerColor}
          actions={
            <Stack gap={1} flexDirection="row">
              <Button color="primary" variant="text" size="small" onClick={handleDrawerState}>
                Cerrar
              </Button>
              <Button color="primary" variant="contained" size="small" onClick={handleDrawerState}>
                Guardar
              </Button>
            </Stack>}
        >
          <>
            <Typography textAlign="center" variant="body2" color="text.primary">
              {children}
            </Typography>

            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              textAlign="center"
              justifyContent="space-evenly"
              gap={1}
              pb={2}
              pt={1}
            >
              <TextField label="Nombre" variant="outlined" size="small" />
              <TextField label="Apellido" variant="outlined" size="small" />
              <TextField
                label="Edad"
                variant="outlined"
                size="small"
                type="number"
              />
              <TextField label="Profesion" variant="outlined" size="small" />
              <TextField label="Cargo" variant="outlined" size="small" />
              <TextField label="Especialidad" variant="outlined" size="small" />
              <TextField
                label="Edad"
                variant="outlined"
                size="small"
                type="number"
              />
              <TextField label="Experiencia" variant="outlined" size="small" />
            </Box>


            <Typography pt={1} textAlign="center" variant="body2" color="text.primary">
              Al hacer click se muestran las acciones
            </Typography>

          </>
        </Drawer>
      </>
    );
  },
};
