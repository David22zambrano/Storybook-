import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ThemeProvider,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
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
      description: "Selecciona entre los tamaños disponibles",
      control: "radio",
      options: ["small", "medium"],
    },
    disabled: {
      description: "Deshabilitar el switch",
      control: "boolean",
    },
    checked: {
      description: "Activa o inactiva el componente",
      control: "boolean",
    },
    title: {
      description:
        "Controla la visibilidad del título, permitiendo activarlo o desactivarlo.",
      control: "text",
    },
    edge:{
      control: "radio",
      options: ["end", "start"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const button: Story = {
  name: "switch",
  args: {
    color: "primary",
    size: "small",
    disabled: false,
    checked: false,
    title: "text",
    edge: "start",
    
  },
  render: ({ color, size, disabled, checked, title,edge  }) => (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            color={color}
            size={size}
            disabled={disabled}
            checked={checked}
            title={title}
            edge={edge}
            
          />
        }
        label={title}
      />
    </FormGroup>
  ),
};
