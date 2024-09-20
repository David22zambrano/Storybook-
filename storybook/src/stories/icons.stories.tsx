import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, SvgIcon } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof SvgIcon> = {
  title: "Components/SvgIcon",
  component: SvgIcon,
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
    fontSize: {
      description: "El tamaño de fuente que se aplica al ícono. El valor predeterminado es 24 px, pero se puede configurar para heredar el tamaño de fuente. ",
      control: "radio",
      options: ["small", "medium", "large", "inherit"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof SvgIcon>;

export const Icon: Story = {
  name: "svgIcon",
  args: {
    fontSize: "small",
  },
  render: ({ fontSize }) => (
    <Delete fontSize={fontSize} />
  ),
};

export const IconSmall: Story = {
  name: "Icon small",
  args: {
    fontSize: "small",
  },
  render: () => (
    <Delete />
  ),
};

export const IconMedium: Story = {
  name: "Icon medium",
  args: {
    fontSize: "medium",
  },
  render: () => (
    <Delete />
  ),
};

export const IconLarge: Story = {
  name: "Icon large",
  args: {
    fontSize: "large",
  },
  render: () => (
    <Delete />
  ),
};
