import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Stack } from "@mui/material";
import { ProgressSinco, SincoTheme } from "@sinco/react";

const meta: Meta<typeof ProgressSinco> = {
  title: "Sinco React/ProgressSinco",
  component: ProgressSinco,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Stack height={160}>
          <Story />
        </Stack>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ProgressSinco>;

export const ProgressSincoStory: Story = {
  name: "ProgressSinco",
  render: () => <ProgressSinco time={1000}  />,
};
