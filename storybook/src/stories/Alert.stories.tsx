import type { Meta, StoryObj } from "@storybook/react";
import "./Generales";
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
      description:"La variante a utilizar.",
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
    children: {
      description:"El contenido del componente",
      control: "text",
    },
    color: {
      description:"	El color del componente.",
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
      description:"El componente asigna la ` severity` propiedad a una variedad de íconos diferentes",
      control: "select",
      options: ["error", "info", "success", "warning"],
    },
    title: {
      description:"El contenido del título",
      control: "text",
    },
    action:{
      description:"La acción que se va a mostrar. Se muestra después del mensaje, al final de la alerta.",
      control:"boolean"
    },
    icon:{
      description:"el icono se asigna al valor de la `severity` propiedad. ",
      control:"boolean"
    }
    
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const AlertStory: Story = {
  name: "Alert",
  args: {
    title:"Titulo del alert",
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
    <AlertTitle>{title}</AlertTitle>
    <Typography variant="body3"> {children}</Typography>
  </Alert>
  ),
};
