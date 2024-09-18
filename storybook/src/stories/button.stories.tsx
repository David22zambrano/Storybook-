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
      description: "Selecciona entre los colores disponibles",
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
      description: "Selecciona el tamaño del componente",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    disabled: {
      description:"Deshabilitar el button",
      control: "boolean",
    },
    children: {
      description:"Introduce el texto que deseas mostrar aquí.",
      control: "text",
    },
    endIcon: {
      description:"Muestra un ícono al final del componente",
      control: "boolean",
    },
    startIcon: {
      description:"Muestra un ícono al inicio del componente.",
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
    disabled: false,
  },
  render: ({ size, variant, startIcon, endIcon, children, disabled,color }) => (
    <Button
      variant={variant}
      size={size}
      color={color}
      startIcon={startIcon === true ? <Person /> : ""}
      endIcon={endIcon === true ? <Person /> : ""}
      disabled={disabled}
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
