import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { SincoTheme } from "../Theme";


const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
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
      control: "select",
      options: [
        "text.primary",
        "text.secondary",
        "text.disabled",
        "primary.light",
        "primary.main",
        "primary.dark",
        "secondary.light",
        "secondary.main",
        "secondary.dark",
        "error.light",
        "error.main",
        "error.dark",
        "info.light",
        "info.main",
        "info.dark",
        "warning.light",
        "warning.main",
        "warning.dark",
        "success.light",
        "success.main",
        "success.dark",
      ],
    },
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body1",
        "body2",
        "body3",
        "subtitle1",
        "subititle2",
        "caption",
        "overline",
      ],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const TypographyStorie: Story = {
  name: "svgIcon",
  args: {
    color: "text.primary",
    variant: "body1",
    children: "Typography",
  },
  render: (args) => <Typography {...args} />,
};
