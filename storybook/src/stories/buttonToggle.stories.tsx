import React from 'react'; 
import type { Meta, StoryObj } from "@storybook/react";
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
  argTypes:{
    color:{
      description:"Selecciona entre los colores disponibles",
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
        "inherit",
      ]
    },
    size: {
      description: "Tamaños disponibles",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    orientation: {
      description: "Define la orientación, eligiendo entre horizontal o vertical.",
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    disabled: {
      description: "Deshabilitar el componente",
      control: "boolean",
    },
    selected:{
      description: "Muestra un estado activo",
      control: "boolean",
    }
    
  }
} as Meta <typeof ToggleButton>;

const Template: StoryObj<typeof ToggleButton>= () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left" >
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
  );
};


export const Rating = Template;

