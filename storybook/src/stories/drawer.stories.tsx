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
    anchorActions:{
      options:[true, false],
      defaultValue: true,
      description: "Determina la posicion de las acciones en eje horizontal",
      control: "text"
    },
    showActions: {
      description: "Fijar las acciones ",
      control: "boolean",
    },
    color:{
      description: "Color de fuente del titulo",
      control:"select",
      options:[
        "text.primary", "text.secondary",
      ]
    },
    headerColor:{
      description: "Background-color del header",
      control: "text"
    }
  },
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const DrawerStory: Story = {
  name: "Sinco Drawer",
  args: {
    color: "text.primary",
    width: "500px",
    title: "Titulo drawer",
    anchor: "right",
    anchorActions: "flex-end",
    headerColor: "text.primary",
    showActions: false,
    onClose: () => {
      const [state, setState] = useState(false);
      const handleDrawerState = useCallback(() => {
        setState((prevOpen) => !prevOpen);
      }, [setState]);
    }
  },
  render: ({ showActions, anchorActions, title, width, anchor, backgroundColor, color, headerColor }) => {

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
          showActions={showActions}
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
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              textAlign="center"
              justifyContent="space-evenly"
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
            <Typography textAlign="center" variant="body2" color="text.primary">
              Al hacer click en algún elemento del contenido del drawer se
              muestran las acciones
            </Typography>
          </>
        </Drawer>
      </>
    );
  },
};
