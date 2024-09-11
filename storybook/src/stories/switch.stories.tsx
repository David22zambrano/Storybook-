import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Switch } from "@mui/material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
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
type Story = StoryObj<typeof Switch>;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const button: Story = {
  name: "switch",
  render: (args) => (
    <>
      <Switch {...label} defaultChecked size="small" />
      <Switch {...label} defaultChecked size="medium" />
    </>
  ),
};
