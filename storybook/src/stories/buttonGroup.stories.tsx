import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Button, ButtonGroup } from "@mui/material";
import { SincoTheme } from "../Theme";
import "./Generales";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
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
      description:"El tamaño del componente `small` es equivalente al estilo del botón denso.",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      description:"El color del componente admite colores de tema predeterminados y personalizados",
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    children: {
      description:"El contenido del componente.",
      control: "text",
    },
    variant: {
      description:"La variante a utilizar.",
      control: "select",
      options: ["text", "outlined", "contained"],
    },
    orientation: {
      description: "La orientación del componente (dirección del flujo de diseño)",
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const ButtonGroupStories: Story = {
  name: "ButtonGroup",
  args: {
    size: "small",
    variant: "contained",
    children: "Button",
    color: "primary",
  },
  render: ({ color, size, variant, children, ...args }) => (
    <>
      <ButtonGroup size={size} color={color} variant={variant} {...args}>
        <Button>{children}</Button>
        <Button>{children}</Button>
        <Button>{children}</Button>
      </ButtonGroup>
    </>
  ),
};
