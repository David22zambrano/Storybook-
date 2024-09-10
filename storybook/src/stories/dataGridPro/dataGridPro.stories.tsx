import type { Meta } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import DataGridProExample from "./dataGridPro";
import DataGridProDemo from "./dataGridTwo";
import { SincoTheme } from "../../Theme";
import "../Generales";

const meta: Meta<typeof DataGridProDemo> = {
  title: "Components/DataGrid",
  component: DataGridProDemo,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const DataGrid = {
  name: "EN PROGRESO...",
};
