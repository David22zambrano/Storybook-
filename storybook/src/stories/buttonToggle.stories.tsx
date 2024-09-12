import React, {  useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, ToggleButtonGroup, ToggleButton } from "@mui/material";
import {  FormatBold } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

export default {
  title: "Components/ToggleButton",
  component: ToggleButtonGroup,
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
      description: "Descripcion del componente",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "",
      control: "boolean",
    },
    children:{
      description: "Contenido dentro del toggle button",
      control: "boolean"
    }
  },
} as Meta;

type Story = StoryObj<typeof ToggleButtonGroup>;

export const ToggleButtonStorie: Story = {
  name: "Toggle button group",
  args: {
    color: "primary",
    size: "small",
    disabled: false,
    children: false,
  },
  render: ({ color, size, disabled,children }) => {
    const [alignment, setAlignment] = useState("web");

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string
    ) => {
      setAlignment(newAlignment);
    };

    return (
      <ToggleButtonGroup
        color={color}
        size={size}
        disabled={disabled}
        value={alignment}
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="web">{children ? <FormatBold fontSize="small" /> : "Web"}</ToggleButton>
        <ToggleButton value="android">{children ? <FormatBold fontSize="small" /> : "Android"} </ToggleButton>
        <ToggleButton value="ios">{children ? <FormatBold fontSize="small" /> : "Android"}</ToggleButton>
      </ToggleButtonGroup>
    );
  },
};