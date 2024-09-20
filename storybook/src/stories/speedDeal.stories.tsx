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
      description:"Si `true`, se muestra el componente.",
      control: "boolean",
    },
    icon: {
      description: "El ícono que se mostrará en la fábrica SpeedDial. ",
      control: "boolean",
    },
    direction: {
      description: "La dirección en la que se abren las acciones en relación con el botón de acción flotante.",
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
