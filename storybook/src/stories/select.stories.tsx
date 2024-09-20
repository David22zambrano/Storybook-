import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ThemeProvider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  SelectChangeEvent,
} from "@mui/material";
import "./Generales";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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
    variant: {
      description: "Selecciona el tipo de variante del componente.",
      control: "radio",
      options: ["filled", "outlined", "standard"],
    },
    size: {
      description: "Selecciona el tamaño del componente.",
      control: "radio",
      options: ["small", "medium"],
    },
    label: {
      description: "Texto dentro del select",
      control: "text",
    },
    error: {
      description: "	Si es `true`, la etiqueta se muestra en un estado de error.",
      control: "boolean",
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
      description: "Deshabilitar el select",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const button: Story = {
  name: "select",
  args: {
    variant: "standard",
    size: "small",
    label: "Text",
    error: false,
    color: "primary",
    disabled: false,
  },
  render: ({ variant, size, label, error, color, disabled }) => {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return (
      <Stack flexDirection={"row"} width={200} gap={1}>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Input label</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant={variant}
            size={size}
            error={error}
            color={color}
            disabled={disabled}
            label={age}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    )
  },
};

export const standard: Story = {
  name: "select",
  render: () => {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };

    return (
      <Stack flexDirection={"row"} width={200} gap={1}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Input label</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            variant="filled"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    )
  },
};

export const filled: Story = {
  name: "select",
  render: () => {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return (
      <Stack flexDirection={"row"} width={200} gap={1}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Input label</InputLabel>
          <Select
            variant="filled"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    )
  },
};
