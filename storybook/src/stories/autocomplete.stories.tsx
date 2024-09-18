import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Autocomplete, Stack, TextField } from "@mui/material";
import { SincoTheme } from "../Theme";
import ClearIcon from "@mui/icons-material/Clear"; 
import "./Generales";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Stack height={145}>
          <Story />
        </Stack>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    readOnly: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    clearIcon: {
      description: "Ícono para limpiar el campo",
      control: "select",
      options: ["ClearIcon", "none"], 
      mapping: {
        ClearIcon: <ClearIcon />,
        none: null, 
      },
    },
    multiple: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const AutoCompleteStorie: Story = {
  name: "Autocomplete",
  args: {
    readOnly: false,
    disabled: false,
    clearIcon: "ClearIcon",
    multiple: false,
  },
  render: ({ readOnly, disabled, clearIcon, multiple }) => (
    <Autocomplete
      disablePortal
      options={top100Films ?? []} 
      sx={{ width: 300 }}
      clearIcon={clearIcon} 
      renderInput={(params) => (
        <TextField {...(params ?? {})} label="Movie" />  
      )}
      readOnly={readOnly}
      disabled={disabled}
      multiple={multiple}
    />
  ),
};

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
