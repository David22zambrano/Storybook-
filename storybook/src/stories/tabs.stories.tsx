import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Tab, Tabs } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Tab> = {
  title: "Components/Tabs",
  component: Tab,
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
type Story = StoryObj<typeof Tab>;

export const primary: Story = {
  name: "Tab",
  render: (args) => (
    <>
      <Tabs value={1} centered>
        <Tab icon={<Phone />} label="RECENTS" />
        <Tab icon={<Phone />} label="RECENTS" />
        <Tab icon={<Phone />} label="RECENTS" />
      </Tabs>
      <Tabs value={1} centered>
        <Tab label="RECENTS" />
        <Tab label="RECENTS" />
        <Tab label="RECENTS" />
      </Tabs>
    </>
  ),
};
export const Secondary: Story = {
  name: "Tab-vertical",
  render: (args) => (
    <>
      <Tabs value={1} orientation="vertical" centered>
        <Tab label="RECENTS" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </>
  ),
};
