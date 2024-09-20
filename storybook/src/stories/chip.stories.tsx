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
      description: "El tamaño del componente.",
      options: ["small", "medium"],
      control: "radio",
    },
    variant: {
      description: "La variante a utilizar.",
      options: ["outlined", "standard", "standard"],
      control: "radio",
    },
    color: {
      description: "El color del componente admite colores de tema predeterminados y personalizados",
      options: ["primary", "secondary", "error", "success", "info", "warning", "default"],
      control: "select",
    },
    label: {
      description: "El contenido del componente.",
      control: "text",
    },
    icon: {
      description: "Elemento de icono.",
      control: "boolean",
      defaultValue: false,
      options: [true, false]
    },
    avatar: {
      description: "El elemento Avatar a mostrar.",
      control: "boolean",
      defaultValue: false,
      options: [true, false]
    },
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
      options: [true, false]
    },
    onDelete: {
      description: "Se activa la devolución de llamada cuando se hace clic en el ícono de eliminar. Si se configura, se mostrará el ícono de eliminar.",
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

export const ChipSimple: Story = {
  name: "Chip simple ",
  args: {
    color: "primary",
    size: "medium",
    icon: <></>,
    label: "chip",
    variant: "standard",
    avatar: <></>,
    disabled: false,
  },
  render: ({ label, size, color, variant, disabled, }) => {
    return (
      <Chip
        size={size}
        label={label}
        color={color}
        variant={variant}
        disabled={disabled}
      />
    )
  },
};

export const ChipWithICon: Story = {
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
  render: ({ label, icon, size, color, variant }) => {
    return (
      <Chip
        size={size}
        label={label}
        color={color}
        icon={icon ? <Delete fontSize="small" /> : undefined}
        variant={variant}
        onClick={() => { }}
      />
    )
  },
};

export const ChipWithAvatar: Story = {
  name: "Chip con avatar",
  args: {
    color: "primary",
    size: "medium",
    label: "chip",
    variant: "standard",
    avatar: <></>,
    disabled: false,
  },
  render: ({ label, size, color, variant, avatar, disabled, }) => {
    return (
      <Chip
        size={size}
        label={label}
        color={color}
        avatar={avatar ? <Avatar sx={{ width: 18, height: 18 }}>OP</Avatar> : undefined}
        variant={variant}
        disabled={disabled}
        onClick={() => { }}
      />
    )
  },
};


export const ChipDeletable: Story = {
  name: "Chip  detatable",
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

export const ChipClickeable: Story = {
  name: "Chip clickeable",
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
        onClick={() => { }}
      />
    )
  },
};

export const ChipClickableDeletable: Story = {
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



