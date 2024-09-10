import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Button, IconButton } from "@mui/material";
import { Delete, Person } from "@mui/icons-material";
import { SincoTheme } from "../Theme";
import "./Generales";


const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
    color: {
      description: "Colores disponibles",
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
        "inherit",
      ],
    },
    size: {
      description: "Descripcion del componente",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    children: {
      control: "text",
    },
    endIcon: {
      control: "boolean",
    },
    startIcon: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStorie: Story = {
  name: "button",
  args: {
    size: "small",
    color: "primary",
    variant: "contained",
    children: "Button",
    startIcon: false,
    endIcon: false,
  },
  render: ({ size, variant, startIcon, endIcon, children }) => (
    <Button
      variant={variant}
      size={size}
      startIcon={startIcon === true ? <Person /> : ""}
      endIcon={endIcon === true ? <Person /> : ""}
    >
      {children}
    </Button>
  ),
};
export const ButtonWhitIcon: Story = {
  name: "Button witdh icons",
  render: () => (
    <>
      <Button size="small" variant="contained" startIcon={<Delete />}>
        Button with Icon
      </Button>
      <Button size="medium" variant="contained" startIcon={<Delete />}>
        Button with Icon
      </Button>
      <Button size="large" variant="contained" startIcon={<Delete />}>
        Button with Icon
      </Button>
    </>
  ),
};
export const Icon_Button: Story = {
  name: "Icon button",
  render: () => (
    <>
      <IconButton size="small">
        <Delete fontSize="small" />
      </IconButton>
      <IconButton size="medium">
        <Delete fontSize="medium" />
      </IconButton>
      <IconButton size="large">
        <Delete fontSize="medium" />
      </IconButton>
    </>
  ),
};
