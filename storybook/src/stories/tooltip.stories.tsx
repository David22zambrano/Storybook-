import {  ThemeProvider, Tooltip, Typography } from "@mui/material";
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
      description: "El contenido del título",
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
    
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const button: Story = {
  name: "tooltip",
  args: {
    title: "tooltip",
    placement:"bottom", 
  },
  render: ({ title,placement}) => (
    <Tooltip 
    title={title}
    placement={placement}>
      <Typography>El tooltip se despliega al hacer hover</Typography>
    </Tooltip>
  ),
};
