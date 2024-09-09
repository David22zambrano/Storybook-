import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { Fab } from "@mui/material";
import { Add, Edit } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Fab> = {
  title: "Components/Fab",
  component: Fab,
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
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    children: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["extended", "circular"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const FabStories: Story = {
  name: "Fab",
  args: {
    size: "small",
    variant: "circular",
    color: "primary",
    children: "Fab",
  },
  render: ({ size, color, children, variant, ...args }) => (
    <>
      {variant === "circular" ? (
        <Fab {...args} variant={variant} color={color} size={size}>
          <Edit />
        </Fab>
      ) : (
        <Fab {...args} variant={variant} color={color} size={size}>
          <Edit />
          {children}
        </Fab>
      )}
    </>
  ),
};
export const FabStorieCircular: Story = {
  name: "Fab-circular",
  render: (args) => (
    <>
      <Fab color="primary">
        <Add />
      </Fab>
      <Fab color="primary" size="medium">
        <Add />
      </Fab>
      <Fab color="primary" size="large">
        <Add />
      </Fab>
    </>
  ),
};
export const FabStorieExtended: Story = {
  name: "Fab-circular",
  render: (args) => (
    <>
      <Fab color="primary" variant="extended">
        <Add />
        Fab
      </Fab>
      <Fab color="primary" size="medium" variant="extended">
        <Add />
        Fab
      </Fab>
      <Fab color="primary" size="large" variant="extended">
        <Add />
        Fab
      </Fab>
    </>
  ),
};
