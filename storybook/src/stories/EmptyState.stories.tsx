import type { Meta, StoryObj } from "@storybook/react";
import { Add } from "@mui/icons-material";
import { ThemeProvider, Button } from "@mui/material";
import { EmptyState } from "./emptyState/EmptyState";
import { SincoTheme } from "../Theme";
import './Generales';

const meta: Meta<typeof EmptyState> = {
  title: "Sinco React/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    state: {
      options: ["error", "create", "noResult", "search"],
      control: { type: "radio" },
      description:
        "El state define la apariencia y acciones del empty state. Este último consta únicamente de cuatro estados.",
    },
    title: {
      type: "string",
      description:
        "El title del empty state es una etiqueta 'Typography' con la variante 'h6', que contiene la razón por la cual se encuentra en dicho estado.",
    },
    subtitle: {
      type: "string",
      description:
        "El content consiste en un texto que proporciona información adicional sobre la causa del estado o las acciones posibles para resolverlo.",
    },
    actions: {
      description:
        "Actions están diseñadas para recibir elementos del tipo HTMLButtonElement. Estos botones se visualizan utilizando un ReactNode dentro de la etiqueta del componente, donde se utiliza la propiedad 'actions={}' para insertarlos y mostrarlos.",
      control: "boolean"
    },
    iconStyle: {
      description:
        "Define el estilo CSS que se aplicará al icono dentro del componente. Esto incluye propiedades como ancho, alto, etc.",
    },
    icon: {
      description:
        "Proporciona una imagen o elemento ReactNode que se muestra en el centro del componente. Por defecto, se utiliza un icono predefinido relacionado con el estado.",
      control: "boolean"
    },
    containerHeight: {
      description:
        "Establece la altura del contenedor que rodea todo el componente. De manera predeterminada, se ajusta al 100% del espacio disponible, pero puede ser personalizada utilizando valores de porcentaje en relación al contenedor padre o en píxeles según las necesidades.",
      control: { type: "number", step: 1 },
    },
  },
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Empty: Story = {
  name: "EmptyState",
  args: {
    state: "create",
    title: "Titulo del empty state",
    subtitle: "Contenido del empty state",
    iconStyle: { width: "210px", height: "185px" },
    containerHeight: "100%",
    actions: "Acciones",
  },
  render: ({ title, actions, containerHeight, iconStyle, state, subtitle }) => (
    <EmptyState
      title={title}
      state={state}
      subtitle={subtitle}
      iconStyle={iconStyle}
      containerHeight={containerHeight}
      actions={actions ? (
        <>
          <Button variant="text" size="small">
            Opcion 1
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<Add fontSize="small" />}
          >
            Opcion 2
          </Button>
        </>
      ) : (null)}
    />
  )
};
