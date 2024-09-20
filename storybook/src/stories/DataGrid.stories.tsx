import './Generales'
import { Meta } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { DataGridPro, LicenseInfo, GridColDef } from "@mui/x-data-grid-pro";
import { SincoTheme } from "../Theme";
import "../index.css";

LicenseInfo.setLicenseKey(
  "43dba252c9426d53421f13de6ce4f3fcTz04OTgyOCxFPTE3NDY2MzQ1NzAwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI="
);

const meta: Meta<typeof DataGridPro> = {
  title: "Mui x/DataGrid",
  component: DataGridPro,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
   
  },
};
export default meta;

interface RowData {
  id: number;
  jobTitle?: string;
  recruitmentDate?: Date;
  hierarchy: string[];
  color: string;
}

const getColorByHierarchy = (hierarchy: string[]): string => {
  if (hierarchy.length === 0) {
    return ""; // No color for rows with no hierarchy
  } else if (hierarchy.length === 1) {
    return SincoTheme.palette.grey[100];
  } else if (hierarchy.length === 2) {
    return SincoTheme.palette.grey[200];
  } else if (hierarchy.length === 3) {
    return SincoTheme.palette.grey[300];
  } else {
    return SincoTheme.palette.grey[400];
  }
};

const hierarchies: Omit<RowData, "color">[] = [
  { id: 0, hierarchy: ["Thomas"] },
  { id: 2, hierarchy: ["Thomas", "Robert"] },
  { id: 3, hierarchy: ["Thomas", "Robert", "Karen"] },
  { id: 4, hierarchy: ["Thomas", "Robert", "Karen", "Nancy"] },
  { id: 5, hierarchy: ["Thomas", "Robert", "Karen", "Nancy", "Daniel"] },
  {
    id: 6,
    jobTitle: "Head of Sales",
    recruitmentDate: new Date(2017, 3, 4),
    hierarchy: ["Thomas", "Robert", "Karen", "Nancy", "Daniel", "Christopher"],
  },
];

const rows: RowData[] = hierarchies.map((item) => ({
  ...item,
  color: getColorByHierarchy(item.hierarchy),
}));

const columns: GridColDef<RowData>[] = [
  { field: "codigo", headerName: "Codigo", width: 200 },
  { field: "jobTitle", headerName: "Job Title", width: 200 },
  {
    field: "recruitmentDate",
    headerName: "Recruitment Date",
    type: "date",  
    width: 150,
  },
];

const getTreeDataPath = (row: { hierarchy: string[] }) => row.hierarchy;

export const Drawer = {
  name: "DataGrid",
  args: {},
  render: () => (
    <DataGridPro
      treeData
      rows={rows}
      columns={columns}
      getTreeDataPath={getTreeDataPath}
      disableRowSelectionOnClick
      getRowClassName={(params) => {
        const hierarchyLength = params.row.hierarchy.length;
        return hierarchyLength > 4 ? "depth-4" : `depth-${hierarchyLength}`;
      }}
    />
  ),
};
