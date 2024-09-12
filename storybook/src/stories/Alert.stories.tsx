import type { Meta, StoryObj } from "@storybook/react";
import "./Generales/tipografia.ts";
import { ThemeProvider } from "@mui/material/styles";
import { Alert, AlertTitle, Button, IconButton, Typography } from "@mui/material";
import { SincoTheme } from "../Theme";
import { Close } from "@mui/icons-material";

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
      description:"Permite activar o desactivar el boton.",
      control:"boolean"
    },
    icon:{
      description:"Permite activar o desactivar el icono.",
      control:"boolean"
    }
    
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const AlertStory: Story = {
  name: "Alert",
  args: {
    title:"titulo del alert",
    children: "Contenido del alert",
    variant: "filled",
    severity: "info",
    color: "info",
    action:false,
    icon:<></>
    
  },
  render: ({ children, variant, title, severity, color, action,icon}) => (
    <Alert
    variant={variant}
    color={color}
    severity={severity}
    action={
      <>
        {action && (
          <Button
            color="inherit"
            size="small"
            onClick={() => console.log("Button clicked")}
          >
            Text
          </Button>
        )}
        {icon && (
          <IconButton
            color="inherit"
            size="small"
            onClick={() => console.log("Icon clicked")}
          >
            <Close />
          </IconButton>
        )}
      </>
    }
  >
    <AlertTitle><Typography variant="body2">{title}</Typography></AlertTitle>
    <Typography variant="body3"> {children}</Typography>
  </Alert>
  ),
};
