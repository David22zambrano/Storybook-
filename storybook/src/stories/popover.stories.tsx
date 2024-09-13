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
    return (
      <div>
        <Popover
          open={true}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>
    );
  }
};
