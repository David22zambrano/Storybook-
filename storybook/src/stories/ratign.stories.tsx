import { Rating, Stack, ThemeProvider } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component:Rating,
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
    disabled:{
      description:"Deshabilitar el rating",
      control:"boolean",
    },
    size:{
      description:"Selecciona el tamaño del componente.",
      control:"radio",
      options:["small","medium","large"]
    },
    readOnly:{
      description:"Elimina todos los efectos de desplazamiento y eventos del puntero.",
      control:"boolean"
    },
    highlightSelectedOnly:{
      description:"Si es `true`, solo se resaltará el icono seleccionado.",
      control:"boolean"
    }

  }
};
export default meta;
type Story = StoryObj<typeof Rating>;
export const AlertStory: Story = {
  name: "Rating",
  args: {
    size:"small",
    disabled:false,
    readOnly:false,
    highlightSelectedOnly:false
  },
  render:({size,disabled,readOnly,highlightSelectedOnly})=>(
    <Stack spacing={1}>
    <Rating
    size={size}
    disabled={disabled}
    readOnly={readOnly}
    highlightSelectedOnly={highlightSelectedOnly}
    />
    
  </Stack>
  )
};
