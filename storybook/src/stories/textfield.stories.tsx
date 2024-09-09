import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, TextField } from "@mui/material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
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
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    variant: {
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
    label: {
      control: "text",
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const TextFieldStory: Story = {
  name: "textField-outlined",
  args: {
    size: "small",
    variant: "outlined",
    label: "TextField",
  },
  render: (args) => <TextField {...args} />,
};
