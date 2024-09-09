import "./Generales";
import type { Meta } from "@storybook/react";
import { ThemeProvider, Button } from "@mui/material";
import { ToastNotification } from "@sinco/react";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof ToastNotification> = {
  title: "Sinco React/ToastNotification",
  component: ToastNotification,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <div style={{ height: "120px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    type: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Info" },
      },
      description:
        "la propiedad type del toast notification nos permite poder usar la variante: `info`,`error`,`success`,`warning`",
    },
    time: {
      table: {
        type: { summary: "number" },

        defaultValue: { summary: 8000 },
      },
      description:
        "En su progressBar por defecto time tienen 8segundos e igualmente puede ser modificado segun los segundos necesarios",
    },
    seeMore: {
      table: {
        type: { summary: "boolean" },

        defaultValue: { summary: false },
      },
      description:
        "seeMore nos poermite ver las observaciones especificas de cada toast",
    },
    dataOpt: {
      table: {
        type: { summary: "array string" },
      },
      description:
        "En el dataOpt vamos a ingresar las observaciones que necesitamos que salgan dependiendo el Toast que aparezca, sea uno informativo, error, informativo o satisfactorio",
    },
    actions: {
      table: {
        type: { summary: "React.ReactNode" },
      },
      description:
        "Se agregaran las acciones requeridas por el desarrolador ya se un boton un cbip o algo que le permita poder ver mas informacionde las obversaciones",
    },
  },
};
export default meta;
export const Primary = {
  name: "Toast-actions",
  args: {
    type: "error",
    time: 100000,
    title: "Title",
    seeMore: true,
    dataOpt: ["El resgistro a fallado"],
    subtitle: "Description",
    actions: (
      <Button color="error" size="small">
        Actions
      </Button>
    ),
  },
};
export const Secondary = {
  name: "Toast-seeMore",
  args: {
    type: "error",
    subtitle: "Description",
    title: "Title",
    time: 100000,
    seeMore: true,
    dataOpt: ["El resgistro a fallado"],
  },
};
export const Terciario = {
  name: "ToastNotification",
  args: {
    type: "error",
    subtitle: "Description",
    title: "Title",
    time: 100000,
  },
};
