import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, ThemeProvider} from "@mui/material";
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
  argTypes:{
    expanded:{
      description: "Expande el accordion",
      control: "boolean"
    },
    title: {
      description: "Titulo de el expansion",
      control: "text"
    },
    defaultExpanded:{
      description: "Se muestra expandidos todos los AccordionSummary por defecto",
      control: "boolean"
    },
    square:{
      description: "Si ",
      control: "boolean"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const button: Story = {
  name: "Accordion",
  args:{
    expanded: false,
    defaultExpanded: false

  },
  render: () => (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </>
  ),
};
