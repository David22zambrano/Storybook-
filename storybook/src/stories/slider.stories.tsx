import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Stack, Slider } from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
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
      description: "El tamaño del control deslizante.",
      control: "radio",
      options: ["small", "medium", "large"]
    },
    value: {
      description: "El valor del control deslizante.",
      control: "range"
    },
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean"
    },
    valueLabelDisplay: {
      description: "Controla cuándo se muestra la etiqueta de valor",
      control: "boolean"
    },
    color: {
      description: "El color del componente.",
      control: "select",
      options: [
        "primary",
        "secondary",
        "info",
        "warning",
        "error",
        "success"
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const SliderSimple: Story = {
  name: "Slider",
  args: {
    size: "small",
    color: "primary",
    value: 35,
    disabled: false,
  },
  render: ({ value, size, disabled, color, valueLabelDisplay }) => (
    <>
      <Stack width={300} flexDirection="row" alignItems="center" gap={1}>
        <VolumeDown />
        <Slider
          color={color}
          size={size}
          value={value}
          disabled={disabled}
          valueLabelDisplay={valueLabelDisplay}
        />
        <VolumeUp />
      </Stack>
    </>
  ),
};
