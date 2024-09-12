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
      control: "boolean",
    },
  },
} as Meta;

type Story = StoryObj<typeof Popper>;

export const PopperStorie: Story = {
  name: "Popper",
  args: {
    open: false,
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const id = args.open ? "simple-popper" : undefined;

    return (
      <div>
        <button aria-describedby={id} type="button" onClick={handleClick}>
          Toggle Popper
        </button>
        <Popper id={id} open={args.open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            The content of the Popper.
          </Box>
        </Popper>
      </div>
    );
  },
};
