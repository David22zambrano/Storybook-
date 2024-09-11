import type { Meta } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import DataGridProExample from "./dataGridPro/dataGridPro";
import DataGridProDemo from "./dataGridPro/dataGridTwo";
import { SincoTheme } from "../Theme";
import "./Generales";

const meta: Meta<typeof DataGridProDemo> = {
  title: "Sinco React/DataGrid",
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
