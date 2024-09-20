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
  name: "Chip simple",
  args: {
  },
  render: () => {
    return (
      <Chip
        label="Chip simple"
        size="medium"
        avatar={<Avatar sx={{ width: 18, height: 18 }}>OP</Avatar>}
        icon={<Add fontSize="small" />}
      />
    )
  }
};

export const ChipIcon: Story = {
  name: "Chip con icono",
  args: {
    size: "medium",
    color: "default",
    icon: <Add fontSize="small" />,
    label: "chip",
    variant: "standard",
  },
};

export const ChipAvatar: Story = {
  name: "Chip con avatar",
  args: {
    color: "default",
    size: "medium",
    icon: <Add fontSize="small" />,
    label: "Chip",
    variant: "standard",
    avatar: <Avatar sx={{ width: 18, height: 18 }}>OP</Avatar>
  },
};


export const ChipDelete: Story = {
  name: "Chip deletable",
  args: {
    color: "default",
    size: "medium",
    icon: <Add fontSize="small" />,
    label: "Chip",
    variant: "standard",
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
    color: "default",
    size: "medium",
    icon: <Add fontSize="small" />,
    label: "Chip",
    variant: "standard",
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
    color: "default",
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



