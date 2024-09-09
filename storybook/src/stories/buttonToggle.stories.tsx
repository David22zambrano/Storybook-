import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import { ThemeProvider, ToggleButtonGroup, ToggleButton, Stack } from "@mui/material";
import { SincoTheme } from "../Theme";
import "./Generales";
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
} as Meta;

const Template: Story<typeof ToggleButton> = () => {
  // Cambiar a typeof ToggleButton
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeft />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <FormatAlignCenter />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <FormatAlignRight />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <FormatAlignJustify />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };
  return (
    <>
      <Stack spacing={2} alignItems="center">
        <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
          {children}
        </ToggleButtonGroup>
        <ToggleButtonGroup {...control} aria-label="Medium sizes">
          {children}
        </ToggleButtonGroup>
        <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
          {children}
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};
export const ratign = Template.bind({});
