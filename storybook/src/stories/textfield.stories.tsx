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
      description: "El tamaño del componente.",
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    variant: {
      description: "La variante a utilizar.",
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
    label: {
      description: "La etiqueta del input.",
      control: "text",
    },
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
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
    },
    error: {
      description: "Si es `true`, la etiqueta se muestra en un estado de error.",
      control: "boolean",
    },
    helperText: {
      description: "El contenido del texto de ayuda.",
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
    helperText: "Helper text",
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
