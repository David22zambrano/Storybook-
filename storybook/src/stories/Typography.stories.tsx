import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
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
      description:"El color del componente.",
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
      description:"La variante a utilizar.",
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
      description:"	El contenido del componente.",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const TypographyStorie: Story = {
  name: "Typography",
  args: {
    color: "text.primary",
    variant: "body1",
    children: "Typography",
  },
  render: (args) => <Typography {...args} />,
};

export const Typographys: Story = {
  name: "Typographys",
  render: (props) => {
    const Typographys = [
      { variant: "h1" },
      { variant: "h2" },
      { variant: "h3" },
      { variant: "h4" },
      { variant: "h5" },
      { variant: "h6" },
      { variant: "body1" },
      { variant: "body2" },
      { variant: "body3" },
      { variant: "subtitle1" },
      { variant: "subititle2" },
      { variant: "caption" },
      { variant: "overline" },
    ];

    return (
      <Stack>
        {Typographys.map((e, index) => (
          <Typography key={index} color="textPrimary" variant={props.variant}>
            Ejemplo tipografia {e.variant}
          </Typography>
        ))}
      </Stack>
    );
  },
};
