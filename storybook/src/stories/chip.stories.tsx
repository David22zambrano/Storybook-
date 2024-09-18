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
      options: ["primary", "secondary", "error", "success", "info", "warning", "default"],
      control: "select",
    },
    label: {
      description: "Texto dentro del chip",
      control: "text",
    },
    icon: {
      description: "Mostrar u ocultar el icono",
      control: "boolean",
      defaultValue: false,
      options: [true, false]
    },
    avatar: {
      description: "Mostrar u ocultar el avatar",
      control: "boolean",
      defaultValue: false,
      options: [true, false]
    },
    disabled: {
      description: "Activa el modo disabled en el componente",
      control: "boolean",
      options: [true, false]
    },
    onDelete: {
      description: "L de eliminar",
    },
    
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const ChipStory: Story = {
  name: "Chip ",
  args: {
    color: "primary",
    size: "medium",
    icon: <></>,
    label: "chip",
    variant: "standard",
    avatar: <></>,
    disabled: false,
  },
  render: ({ label, icon, size, color, variant, avatar, disabled, }) => {
    return (
      <Chip
        size={size}
        label={label}
        color={color}
        icon={icon ? <Delete fontSize="small" /> : undefined}
        avatar={avatar ? <Avatar sx={{ width: 18, height: 18 }}>OP</Avatar> : undefined}
        variant={variant}
        disabled={disabled}
        onDelete={() => { }}
        onClick={() => { }}
      />
    )
  },
};

export const ChipDefault: Story = {
  name: "Chip default",
  args: {
  },
  render: () => {
    return (
      <Chip
        label="Chip simple"
        size="medium"
        avatar={<Avatar sx={{ width: 18, height: 18 }}>OP</Avatar>}
        icon={<Add fontSize="small" />}
        onClick={() => { }}
        onDelete={() => { }}
      />
    )
  }
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
    label: "Chip",
    variant: "filled",
    avatar: <Avatar sx={{ width: 18, height: 18 }}>OP</Avatar>
  },
};


export const ChipDelete: Story = {
  name: "Chip deletable",
  args: {
    color: "primary",
    size: "medium",
    icon: <Add fontSize="small" />,
    label: "Chip",
    variant: "filled",
    avatar: <Avatar sx={{ width: 18, height: 18 }}>OP</Avatar>,
    onDelete: () => { },
  },
  render: (args) => {
    return (
      <Chip {...args} />
    )
  }
};

export const ChipCilckeable: Story = {
  name: "Chip con avatar",
  args: {
    color: "primary",
    size: "medium",
    icon: <Add fontSize="small" />,
    label: "Chip",
    variant: "filled",
    avatar: <Avatar sx={{ width: 18, height: 18 }}>OP</Avatar>,
    onClick: () => { }
  },
  render: (args) => {
    return (
      <Chip {...args} />
    )
  }
};

export const ChipClickeableDeletable: Story = {
  name: "Chip clickeable y deletable",
  args: {
    color: "primary",
    size: "medium",
    icon: <Add fontSize="small" />,
    label: "Chip",
    variant: "standard",
    avatar: <Avatar sx={{ width: 18, height: 18 }}>OP</Avatar>,
    onDelete: () => { },
    onClick: () => { }
  },
  render: (args) => {
    return (
      <Chip {...args} />
    )
  }
};



