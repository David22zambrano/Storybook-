/* eslint-disable react-hooks/rules-of-hooks */
import  { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Popover, Typography } from "@mui/material";
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
  argTypes:{
    open: {
      description: "Si es `true` muestra el componente"
    }
  },
} as Meta;
type Story = StoryObj<typeof Popover>;


export const PopoverExample: Story = {
  name: "Popover",
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 100,
      },
    },
  },
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Popover
          id={id}
          open={true}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handleClose}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>
    );
  }
};
