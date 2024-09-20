import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, ThemeProvider } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { SincoTheme } from "../Theme";
import "./Generales";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
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
    expanded: {
      description: "Si `true`, expande el acordeón, de lo contrario lo contrae.",
      control: "boolean"
    },
    defaultExpanded:{
      description: "Expande todos los el accordion por defecto"
    },
    square: {
      description: "si es `true`, se desabilitan las esquinas redondeadas se desabilitara ",
      control: "boolean"
    },
    children: {
      description: "Contenido del componete",
      control: "text"
    },
    disabled: {
      description: "Si es `true`, el componente es desabilidato",
      control: "boolean"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const AccordionBasic: Story = {
  name: "Accordion",
  args: {
    expanded: false,
    square: false,
    disabled: true,
    children: "Contenido del Accordion",
  },
  render: ({ children, disabled, square, expanded }) => (
    <>
      <Accordion square={square} expanded={expanded} >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion simple</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {children ? children : "AccordionDetails"}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography> DefaultExpanded </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {children ? children : "AccordionDetails"}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled={disabled} >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled example </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {children ? children : "AccordionDetails"}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  ),
};
