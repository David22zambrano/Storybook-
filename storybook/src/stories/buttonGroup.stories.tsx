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
      description:"Selecciona entre los tamaños disponibles",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      description:"Selecciona entre los colores disponibles",
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    children: {
      description:"Introduce el texto o contenido que deseas mostrar aquí.",
      control: "text",
    },
    variant: {
      description:"Selecciona entre los colores disponibles",
      control: "select",
      options: ["text", "outlined", "contained"],
    },
    orientation: {
      description: "Define la orientación, eligiendo entre horizontal o vertical.",
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
