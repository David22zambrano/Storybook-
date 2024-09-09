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
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const button: Story = {
  name: "pagination",
  render: (args) => (
    <>
      <Pagination count={10} size="small" />
      <Pagination count={10} size="medium" />
      <Pagination count={10} size="large" />
    </>
  ),
};
