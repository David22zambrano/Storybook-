import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
// import { SincoTheme } from "@sinco/react";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import { SincoTheme } from "../Theme";
import { Close } from "@mui/icons-material";
// import { button } from './tooltip.stories';

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
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
    variant: {
      description:"Selecciona el tipo de variante del componente.",
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
    children: {
      description:"Introduce el texto o contenido que deseas mostrar aquí.",
      control: "text",
    },
    color: {
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
      ],
    },
    severity: {
      description:"Elige el ícono según las opciones disponibles",
      control: "select",
      options: ["error", "info", "success", "warning"],
    },
    title: {
      description:"Introduce el título del componente.",
      control: "text",
    },
    action:{
      description:"Permite activar o desactivar la acción.",
      control:"boolean"
    }
    
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const AlertStory: Story = {
  name: "Alert",
  args: {
    children: "Alert",
    variant: "filled",
    severity: "info",
    color: "info",
    action:false,
    
  },
  render: ({ children, variant, title, severity, color, action}) => (
    <Alert variant={variant} color={color} severity={severity} action={
      action ? (
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => console.log("Icon button clicked")}
        >
          <Close fontSize="inherit" />
        </IconButton>
      ) : ""
    } >
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  ),
};
