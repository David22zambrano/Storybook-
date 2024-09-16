/* eslint-disable react-hooks/rules-of-hooks */
import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Popper, Box } from "@mui/material";
import { SincoTheme } from "../Theme";
import { useState } from "react";

export default {
  title: "Components/Popper",
  component: Popper,
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
      description: "Si es `true` muestra el componente",
      control: "boolean",
    },
  },
} as Meta;

type Story = StoryObj<typeof Popper>;

export const PopperStorie: Story = {
  name: "Popper",
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 100,
      },
    },
  },
  args: {
    open: true, 
  },
  render: (args) => {
    const [anchorEl] = useState<null | HTMLElement>(null);

    const open = args.open && Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
      <div>
        <Popper id={id} open={true} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            The content of the Popper.
          </Box>
        </Popper>
      </div>
    );
  },
};
