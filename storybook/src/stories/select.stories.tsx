import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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
};

export default meta;
type Story = StoryObj<typeof Select>;

export const button: Story = {
  name: "select",
  render: (args) => (
    <Stack flexDirection={"row"} width={200} gap={1}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"hola"}
          label="Hola"
          onChange={undefined}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          size="medium"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"hola"}
          label="Hola"
          onChange={undefined}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  ),
};
export const standard: Story = {
  name: "select",
  render: (args) => (
    <Stack flexDirection={"row"} width={200} gap={1}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          variant="standard"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"hola"}
          label="Hola"
          onChange={undefined}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          variant="standard"
          size="medium"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"hola"}
          label="Hola"
          onChange={undefined}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  ),
};
export const filled: Story = {
  name: "select",
  render: (args) => (
    <Stack flexDirection={"row"} width={200} gap={1}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          variant="filled"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"hola"}
          label="Hola"
          onChange={undefined}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          variant="filled"
          size="medium"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"hola"}
          label="Hola"
          onChange={undefined}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  ),
};
