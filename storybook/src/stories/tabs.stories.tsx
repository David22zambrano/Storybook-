import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Tab, Tabs } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Tab> = {
  title: "Components/Tabs",
  component: Tab,
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
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
    },
    icon: {
      description: "El icono a mostrar.",
      control: "boolean",
    },
    label: {
      description: "La etiqueta del input. ",
      control: "text",
    },
    iconPosition: {
      description:"La posición del icono con respecto a la etiqueta.",
      control: "radio",
      options: ["start", "top", "end", "bottom"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const TabExample: Story = {
  name: "Tab",
  args: {
    disabled: false,
    label: "RECENTS",
    icon: <></>,
    iconPosition: "start",
  },
  render: ({ disabled, label, icon, iconPosition }) => (
    <Tabs value={1} centered>
      <Tab
        iconPosition={iconPosition}
        disabled={disabled}
        icon={icon ? <Phone fontSize="medium" /> : undefined}
        label={label}
      />
      <Tab
        iconPosition={iconPosition}
        disabled={disabled}
        icon={icon ? <Phone fontSize="medium" /> : undefined}
        label={label}
      />
      <Tab
        iconPosition={iconPosition}
        disabled={disabled}
        icon={icon ? <Phone fontSize="medium" /> : undefined}
        label={label}
      />
    </Tabs>
  ),
};
export const TabVertical: Story = {
  name: "Tab vertical",
  render: () => (
    <Tabs value={1} orientation="vertical" centered>
      <Tab label="RECENTS" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  ),
};
