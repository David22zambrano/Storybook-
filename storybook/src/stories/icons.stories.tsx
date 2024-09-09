import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, SvgIcon } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof SvgIcon> = {
  title: "Components/SvgIcon",
  component: SvgIcon,
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
type Story = StoryObj<typeof SvgIcon>;

export const button: Story = {
  name: "svgIcon",
  render: (args) => (
    <>
      <Delete fontSize="small" />
      <Delete fontSize="medium" />
      <Delete fontSize="large" />
    </>
  ),
};
