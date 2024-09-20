import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./Generales";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
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
    checked:{
      description: "Si `true`, el componente está marcado.",
      control:"boolean"
    },
    size: {
      description: "El tamaño del componente `small `es equivalente al estilo de casilla de verificación densa.",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      description: "El color del componente admite colores de tema predeterminados y personalizados",
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxStories: Story = {
  name: "checkbox",
  args: {
    size: "medium",
    color: "primary",
    disabled: false, 
    checked:false
  },
  render: (args) => <Checkbox {...args} />,
};

export const CheckboxStoriesFormControl: Story = {
  name: "checkbox-formControl",
  args: {
    size: "medium",
    color: "primary",
    disabled: false, 
  },
  render: (args) => (
    <FormGroup>
      <FormControlLabel control={<Checkbox {...args} />} label="Label" />
      <FormControlLabel
        required
        control={<Checkbox {...args} />}
        label="Required"
      />
      <FormControlLabel
        control={<Checkbox {...args} disabled />}
        label="Disabled"
      />
    </FormGroup>
  ),
};
