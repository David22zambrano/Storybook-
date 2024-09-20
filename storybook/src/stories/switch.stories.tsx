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
      description: "El color del componente.",
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
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
    },
    checked: {
      description: "Si `true`, el componente está marcado.",
      control: "boolean",
    },
    title: {
      description:"El contenido del título",
      control: "text",
    },
    edge:{
      description:"Si se proporciona, utiliza un margen negativo para contrarrestar el relleno de un lado ",
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
