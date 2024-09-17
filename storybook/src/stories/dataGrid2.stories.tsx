import { Box, ThemeProvider } from "@mui/material";
import { DataGridPro, GridColDef } from "@mui/x-data-grid-pro";
import { Meta, StoryObj } from "@storybook/react";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof DataGridPro> = {
  title: "Mui x/DataGridPro",
  component: DataGridPro,
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
    editMode: {
      control: "radio",
      options:["cell","row"]
     
    },
    density:{
        control:"radio",
        options:["standard","compact","comfortable"]
    },

  },
};
export default meta;
type Story = StoryObj<typeof DataGridPro>;
const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: true,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: "olla expressssss chuchuchu", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
export const DataGridProStory: Story = {
  name: "DataGridPro",
args:{
    editMode:"cell",
    density:"standard"
},
  render: ({editMode,density}) => (
     <Box
    sx={(theme) => ({
      height: 400,
      width: '100%',
      '& .MuiDataGrid-cell--editable': {
        bgcolor: 'rgb(217 243 190)',
        ...theme.applyStyles('dark', {
          bgcolor: '#376331',
        }),
      },
    })}
  >
      <DataGridPro
      density={density}
      editMode={editMode}
        rows={rows}
        columns={columns}
        isCellEditable={(params) => params.row.age % 2 === 0}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  ),
};
