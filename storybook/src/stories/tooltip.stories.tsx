import { ThemeProvider, Tooltip, Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
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
    title: {
      description: "Introduce el título del componente.",
      control: "text",
    },
    placement: {
      descripcion: "Ubicación de la información sobre herramientas.",
      control: "select",
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
    },
    arrow: {
      description: "Si es `true`, agrega una flecha a la información sobre herramientas.",
      control: "boolean"
    }

  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const button: Story = {
  name: "tooltip",
  args: {
    title: "tooltip",
    placement: "bottom",
    arrow: true
  },
  render: ({ title, placement, arrow }) => (
    <Tooltip
      arrow={arrow}
      title={title}
      placement={placement}>
      <Typography variant="h6" color="text.primary" >El tooltip se muestra al hacer hover sobre el texto</Typography>
    </Tooltip>
  ),
};
