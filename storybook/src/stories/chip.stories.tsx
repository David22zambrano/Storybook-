import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, ThemeProvider, Chip } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
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
      options: ["outlined", "filled", "standard"],
      control: "radio",
    },
    color: {
      description: "Selecciona entre los colores disponibles",
      options: ["primary", "secondary", "error", "success", "info", "warning", "chipPrimary", "chipSecondary", "chipError", "chipSuccess", "chipInfo" , "chipWarning"],
      control: "select",
    },
    label: {
      description: "Texto dentro del chip",
      control: "text",
    },
    icon: {
      description: "Mostrar u ocultar el icono",
      control: "boolean",
      options: [true, false]
    },
    avatar: {
      description: "Mostrar u ocultar el avatar",
      control: "boolean",
      options: [true, false]
    },
    disabled: {
      description: "Activa el modo disabled en el componente",
      control: "boolean",
      options: [true, false]
    }
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const ChipStory: Story = {
  name: "chip",
  args: {
    color: "primary",
    size: "medium",
    icon: <></>,
    label: "chip",
    variant: "standard",
    avatar: <></>,
    disabled: false,
  },
  render: ({ label, icon, size, color, variant, avatar, disabled }) => (
    <Chip
      size={size}
      label={label}
      color={color}
      avatar={avatar ? <Avatar sx={{ width: 18, height: 18 }}>OP</Avatar>:  undefined }
      icon={icon ?  <Delete fontSize="small"  />: undefined }
      variant={variant}
      disabled={disabled}
       />
  ),
};

export const ChipIcon: Story = {
  name: "Chip con icono",
  args: {
    color: "primary",
    size: "medium",
    icon: <Add fontSize="small" />,
    label: "chip",
    variant: "filled",
  },
};

export const ChipAvatar: Story = {
  name: "Chip con avatar",
  args: {
    color: "primary",
    size: "medium",
    icon: <Add fontSize="small" />,
    label: "chip",
    variant: "filled",
    avatar: <Avatar sx={{ width: 18, height: 18 }}>OP</Avatar>
  },
};
