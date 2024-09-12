import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ThemeProvider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Radio> = {
  title: "Components/RadioGroup",
  component: Radio,
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
      description: "Selecciona entre los tamaños disponibles",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      description: "Selecciona entre los colores disponibles",
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    disabled: {
      description: "Deshabilitar el radio",
      control: "boolean",
    },
    checked: {
      description:
        "Modifica el estado del radio a `checked` en la opcion seleccionada",
    },

    title: {
      description:
        "Controla la visibilidad del título, permitiendo activarlo o desactivarlo.",
      control: "text",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Radio>;
export const RadioButtonsGroup: Story = {
  name: "Radio-ButtonsGroup",
  args: {
    size: "medium",
    color: "primary",
    disabled: false,
    title: "Label radio",
  },
  render: ({ size, color, disabled, title }) => (
    <FormControl>
      <FormLabel></FormLabel>
      <RadioGroup defaultValue="female">
        <FormControlLabel
          value="female"
          control={
            <Radio
              title={title}
              size={size}
              color={color}
              disabled={disabled}
            />
          }
          label={title}
        />
        <FormControlLabel
          value="male"
          control={
            <Radio
              title={title}
              size={size}
              color={color}
              disabled={disabled}
            />
          }
          label={title}
        />
        <FormControlLabel
          value="other"
          control={
            <Radio
              title={title}
              size={size}
              color={color}
              disabled={disabled}
            />
          }
          label={title}
        />
      </RadioGroup>
    </FormControl>
  ),
};
