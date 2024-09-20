/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import {
  ThemeProvider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { SincoTheme } from "../Theme";
import "./Generales";
import { useCallback, useState } from "react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: {
      description: "Si es `true`, el componente se muestra",
    },
    onClose: {
      description: "`function(event: object, reason: string) => void`",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const DialogStorie: Story = {
  name: "Dialog",
  args: {
    open: true,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    const controlDialog = useCallback(() => {
      setOpen((prev) => !prev);
    }, [setOpen]);
    return (
      <>
        <Button onClick={controlDialog}>Abrir dialog</Button>
        <Dialog open={open} onClose={controlDialog}>
          <DialogTitle>Title dialog</DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="text.primary">
              Contenido del dialog
            </Typography>
          </DialogContent>
          <DialogActions>
            <Stack flexDirection={"row"} gap={1}>
              <Button color="primary" variant="text">
                Cancelar
              </Button>
              <Button color="primary" variant="contained">
                Guardar
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};
