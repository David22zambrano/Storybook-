import type { Meta, Story } from "@storybook/react";
import { ToggleButtonGroup, ToggleButton, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SincoTheme } from "../Theme";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import React from "react";
import {
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
} from "@mui/icons-material";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
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
      description: "Tamaños disponibles",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      description: "Colores disponibles",
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success", "inherit"],
    },
    disabled: {
      description: "Deshabilitar botones",
      control: "boolean",
    },
  },
} as Meta;

const Template: Story<{ size: "small" | "medium" | "large", color: "primary" | "secondary" | "error" | "warning" | "info" | "success" | "inherit", disabled: boolean }> = (args) => {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left" color={args.color} disabled={args.disabled}>
      <FormatAlignLeft />
    </ToggleButton>,
    <ToggleButton value="center" key="center" color={args.color} disabled={args.disabled}>
      <FormatAlignCenter />
    </ToggleButton>,
    <ToggleButton value="right" key="right" color={args.color} disabled={args.disabled}>
      <FormatAlignRight />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify" color={args.color} disabled={args.disabled}>
      <FormatAlignJustify />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} alignItems="center">
      <ToggleButtonGroup size={args.size} {...control} aria-label={`${args.size} size`}>
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  color: "primary", // Default color value
  disabled: false, // Default disabled state
};
