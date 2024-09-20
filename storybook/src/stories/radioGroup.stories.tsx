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
      description:
        "El tamaño del componente `small` es equivalente al estilo de radio denso.",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      description: "	El color del componente.",
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
    },
    checked: {
      description: "Si `true`, el componente está marcado.",
    },

    title: {
      description: "El contenido del título",
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
