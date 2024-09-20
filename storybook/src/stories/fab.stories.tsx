import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { Fab } from "@mui/material";
import { Add, Edit } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Fab> = {
  title: "Components/Fab",
  component: Fab,
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
      description: "El tamaño del componente `small` es equivalente al estilo del botón denso.",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      description: "El color del componente admite colores de tema predeterminados y personalizados",
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    children: {
      description: "El contenido del componente.",
      control: "text",
    },
    variant: {
      description: "La variante a utilizar.",
      control: "select",
      options: ["extended", "circular"],
    },
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const FabStories: Story = {
  name: "Fab",
  args: {
    size: "small",
    variant: "circular",
    color: "primary",
    children: "Fab",
    disabled: false, 
  },
  render: ({ size, color, children, variant, disabled, ...args }) => (
    <>
      {variant === "circular" ? (
        <Fab {...args} variant={variant} color={color} size={size} disabled={disabled}>
          <Edit />
        </Fab>
      ) : (
        <Fab {...args} variant={variant} color={color} size={size} disabled={disabled}>
          <Edit />
          {children}
        </Fab>
      )}
    </>
  ),
};

export const FabStorieCircular: Story = {
  name: "Fab-circular",
  render: () => (
    <>
      <Fab color="primary" disabled>
        <Add />
      </Fab>
      <Fab color="primary" size="medium" disabled>
        <Add />
      </Fab>
      <Fab color="primary" size="large" disabled>
        <Add />
      </Fab>
    </>
  ),
};

export const FabStorieExtended: Story = {
  name: "Fab-extended",
  render: () => (
    <>
      <Fab color="primary" variant="extended" disabled>
        <Add />
        Fab
      </Fab>
      <Fab color="primary" size="medium" variant="extended" disabled>
        <Add />
        Fab
      </Fab>
      <Fab color="primary" size="large" variant="extended" disabled>
        <Add />
        Fab
      </Fab>
    </>
  ),
};
