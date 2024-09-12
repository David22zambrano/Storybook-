import type { Meta, StoryObj } from "@storybook/react";
import { Button, IconButton, ThemeProvider } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { SincoTheme } from "../Theme";
import { PageHeader } from "./pageHeader";
import "./Generales";


const meta: Meta<typeof PageHeader> = {
  title: "Sinco React/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <div style={{ height: "56px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    actions: {
      description: "Las acciones que se podran agregar en el pageheader",
    },
    fixed: {
      description: "Ahora el pageHader podrá tener una posición fixed o no",
      control: "boolean"
    },
    title: {
      description: "Modifica el titulo del PageHeader",
      control: "text"
    },
    subtitle: {
      description: "Modifica el subtitulo del PageHeader",
      control: "text"
    },
    buttonBack: {
      description: "Muestra u oculta el boton de retroceso",
      control: "boolean"
    }
  },
};
export default meta;
 type Story = StoryObj<typeof PageHeader>;

export const PageHeaderExmaple: Story = {
  name: "PageHeader",
  args: {
    fixed: false,
    title: "Title",
    subtitle: "Subtitle",
    actions: <Button size="small">Actions</Button>,
    buttonBack: false,
  },
  render: ({ fixed, title, subtitle, buttonBack, actions }) => (
    <PageHeader
      fixed={fixed}
      subtitle={subtitle}
      title={title}
      actions={ actions ? <Button size="small">Actions</Button> : null }
      buttonBack={
        buttonBack
          ? <IconButton size="small" color="primary"> <ArrowBack fontSize="small" /> </IconButton>
          : null
      }
    ></PageHeader>
  )
};
