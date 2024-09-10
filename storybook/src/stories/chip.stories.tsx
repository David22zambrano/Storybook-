import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, ThemeProvider, Chip } from "@mui/material";
import { Add } from "@mui/icons-material";
import { SincoTheme } from "../Theme";
import "./Generales";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
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
      description: "Selecciona entre los tamaños disponibles",
      options: ["small", "medium"],
      control: "radio",
    },
    variant: {
      description: "Elige entre las variantes disponibles",
      options: ["outlined", "filled"],
      control: "radio",
    },
    color: {
      description: "Selecciona entre los colores disponibles",
      options: ["primary", "secondary", "error", "success", "info", "warning"],
      control: "radio",
    },
    icon: {
      description: "Mostrar u ocultar el icono",
      control: "boolean",
    },
    label: {
      description: "Texto dentro del chip",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const ChipStory: Story = {
  name: "chip",
  args: {
    color: "primary",
    size: "small",
    icon: <Add fontSize="small" />,
    label: "chip",
    variant: "filled",
    avatar: <></>
  },
  render: ({ label, icon, size, color, variant, avatar }) => (
    <Chip size={size} label={label} color={color} icon={icon} variant={variant} avatar={avatar} />
  ),
};

export const ChipAvatar: Story = {
  name: "Chip con avatar",
  args: {
    color: "primary",
    size: "medium",
    icon: <Add fontSize="small" />,
    label: "chip",
    variant: "filled",
    avatar: <Avatar sx={{width: 18, height: 18}}>OP</Avatar>
  },
};
