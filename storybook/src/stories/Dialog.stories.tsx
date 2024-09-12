import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack, } from "@mui/material";
import { SincoTheme } from "../Theme";
import "./Generales";

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
      description: "`Boolean` es `true` ",
      control: "boolean"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const CheckboxStories: Story = {
  name: "checkbox",
  args: {
    open: false,
    onClose: () => { }
  },
  render: (args) =>
    <Dialog {...args} >
      <DialogTitle>Title dialog</DialogTitle>
      <DialogContent>Contenido del dialog</DialogContent>
      <DialogActions>
        <Stack>
          <Button color="primary" variant="text" >Cancelar</Button>
          <Button color="primary" variant="contained" >Guardar</Button>
        </Stack>
      </DialogActions>
    </Dialog>
};
