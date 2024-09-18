import { IconButton, ThemeProvider, Tooltip } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { SincoTheme } from "../Theme";
import { Delete } from "@mui/icons-material";

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
    open:{
        description:"Si `true`, se muestra el componente.",
        control:"boolean"
    }
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const button: Story = {
  name: "tooltip",
  args: {
    title: "tooltip",
    placement:"bottom",
    open:false
  },
  render: ({ title,placement,open}) => (
    <Tooltip 
    title={title}
    placement={placement}
    open={open}
    >
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  ),
};
