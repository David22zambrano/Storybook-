import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Pagination } from "@mui/material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
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
    color: {
      description: "El color activo. Admite colores de tema predeterminados y personalizados",
      control: "select",
      options: ["primary", "secondary", "info", "warning", "error", "success"
     ]
    },
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
    },
    size: {
      description: "El tamaño del componente.",
      control: "radio",
      options: ["small", "medium", "large"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const PaginationExample: Story = {
  name: "pagination",
  args: {
    color: "primary",
    size: "small",
    count: 20,
    disabled: false
  },
  render: ({ count, size, disabled, color }) => (
    <>
      <Pagination count={count} size={size} disabled={disabled} color={color} />
    </>
  ),
};

export const PaginationSizeMedium: Story = {
  name: "pagination",
  args: {
    color: "primary",
    size: "medium",
    count: 20,
    disabled: false,
  },
  render: (args) => (
    <Pagination {...args} />
  ),
};

export const PaginationSizeSmall: Story = {
  name: "pagination",
  args: {
    color: "primary",
    size: "medium",
    count: 25,
    disabled: false,
  },
  render: (args) => (
    <Pagination {...args} />
  ),
};
