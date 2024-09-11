import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeProvider, Typography } from "@mui/material";
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
    leftContent: {
      description: "No es necesario agregar estilos de espaciado, ya lo trae implementado para hacer su uso mas facíl "
    }
  }
};
export default meta;
type Story = StoryObj<typeof FooterAction>;

export const FooterActionStory: Story = {
  name: "FooterAction..",
  args: {
    labelChangeCounter: "Cambiaste X campos de informacion",
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
