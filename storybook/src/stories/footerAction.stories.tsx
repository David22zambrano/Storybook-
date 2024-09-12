import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeProvider } from "@mui/material";
import { FooterAction } from "./footerAction/footerAction";
import { SincoTheme } from "../Theme";
import './Generales';

const meta: Meta<typeof FooterAction> = {
  title: "Sinco React/footerAction",
  component: FooterAction,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    labelChangeCounter: {
      description: "Label:  string | reactNode",
      control: "text"
    },
  }
};
export default meta;
type Story = StoryObj<typeof FooterAction>;

export const FooterActionStory: Story = {
  name: "FooterAction",
  args: {
    labelChangeCounter: "Cambiaste X campos de informacion",
    leftContent: "Action",
    rightContent: "Action"
  },

  render: ({ labelChangeCounter, leftContent, rightContent }) => (
    <FooterAction
      labelChangeCounter={labelChangeCounter}
      leftContent={
        <Button size="small">{leftContent}
        </Button>
      }
      rightContent={
        <>
          <Button size="small">{rightContent}</Button>
          <Button size="small">{rightContent}</Button>
        </>
      }
    ></FooterAction>
  )
};
