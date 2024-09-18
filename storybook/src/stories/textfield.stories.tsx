import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, TextField, Box, MenuItem } from "@mui/material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
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
      description: "Selecciona el tamaño del componente.",
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    variant: {
      description: "Selecciona el tipo de variante del componente.",
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
    label: {
      description: "Texto dentro del select",
      control: "text",
    },
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
    disabled: {
      description: "Deshabilitar el textField",
      control: "boolean",
    },
    error: {
      description: "Si es `true`, la etiqueta se muestra en un estado de error.",
      control: "boolean",
    },
    helperText: {
      description: "Introduce el texto de ayuda para el componente.",
      control: "text",
    },
    select: {
      description: "Habilita la funcionalidad de selección.",
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const TextFieldStory: Story = {
  name: "textField-outlined",
  args: {
    size: "small",
    variant: "outlined",
    label: "TextField",
    color: "primary",
    disabled: false,
    error: false,
    helperText: "text",
    select: false,
  },
  render: ({ size, variant, label, color, disabled, error, helperText, select }) => {
    const currencyOptions = [
      { value: 'USD', label: '$' },
      { value: 'EUR', label: '€' },
      { value: 'BTC', label: '฿' },
      { value: 'JPY', label: '¥' },
    ];

    return (
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField  
          label={label}
          variant={variant}
          size={size}
          color={color}
          disabled={disabled}
          error={error}
          helperText={helperText}
          select={select}
        >
          {select && currencyOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    );
  }
};
