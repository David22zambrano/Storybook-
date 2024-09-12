import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Popover, Typography, Button } from "@mui/material";
import { SincoTheme } from "../Theme";
import "./Generales";

export default {
  title: "Components/Popover",
  component: Popover,
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
} as Meta;
type Story = StoryObj<typeof Popover>;


export const PopoverExample: Story = {
  name: "Popover",
  argTypes:{
  },
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Button aria-describedby={id} variant="text" onClick={handleClick}>
          Ver Popover
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>
    );
  }
};
