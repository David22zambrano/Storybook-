import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Box, Slider } from "@mui/material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
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
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const button: Story = {
  name: "slider",
  render: (args) => (
    <>
      <Box sx={{ width: 300 }}>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  ),
};
