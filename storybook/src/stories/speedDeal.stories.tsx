import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { FileCopy, Print, Save, Share } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof SpeedDial> = {
  title: "Components/SpeedDial",
  component: SpeedDial,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
    },
    icon: {
      description: "Mostrar u ocultar el icono",
      control: "boolean",
    },
    direction: {
      description: "Define la orientación, eligiendo entre down, up, left, right.",
      control: "radio",
      options: ["down", "up", "left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpeedDial>;

const actions = [
  { icon: <FileCopy />, name: "Copy" },
  { icon: <Save />, name: "Save" },
  { icon: <Print />, name: "Print" },
  { icon: <Share />, name: "Share" },
];

export const SpeedDialStory: Story = {
  name: "SpeedDial",
  args: {
    open: true,
    icon: true,
    direction: "up",
  },
  render: (args) => (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={args.icon ? <SpeedDialIcon /> : <></>}
        open={args.open}
        direction={args.direction}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  ),
};
