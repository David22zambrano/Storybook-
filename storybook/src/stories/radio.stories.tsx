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
  title: "Components/Radio",
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
      description:"El tamaño del componente `small` es equivalente al estilo de radio denso.",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      description:"	El color del componente.",
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
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
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioStorie: Story = {
  name: "radio",
  args: {
    size: "medium",
    color: "primary",
    disabled: false,
    checked: false,
    title: "radio",
  },
  render: ({ size, color, disabled, checked, title }) => (
    <FormControl>
      <RadioGroup row >
        <FormControlLabel
          control={
            <Radio
              size={size}
              color={color}
              disabled={disabled}
              checked={checked}
              title={title}
            />
          }
          label={title ? "radio" : ""}
        />
      </RadioGroup>
    </FormControl>
  ),
};
export const RadioStorieFormControl: Story = {
  name: "Radio-formControl",
  args: {
    size: "medium",
    color: "primary",
  },
  render: (args) => (
    <FormControl>
      <FormLabel>Exmaple</FormLabel>
      <RadioGroup row>
        <FormControlLabel control={<Radio {...args} />} label="Female" />
        <FormControlLabel control={<Radio {...args} />} label="Male" />
        <FormControlLabel control={<Radio {...args} />} label="Other" />
      </RadioGroup>
    </FormControl>
  ),
};

