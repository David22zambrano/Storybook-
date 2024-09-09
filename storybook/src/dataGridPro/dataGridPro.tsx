import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  GridRowsProp,
  GridColDef,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridActionsCellItem,
  GridSearchIcon,
} from "@mui/x-data-grid";
import {
  DataGridPro,
  GridPinnedRowsProp,
  useGridApiRef,
} from "@mui/x-data-grid-pro";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
const lista: any[] = [
  {
    id: "Small",
    nombre: "Small",
  },
  {
    id: "Medium",
    nombre: "Medium",
  },
  {
    id: "Large",
    nombre: "Large",
  },
];
const estadoInsumo: any[] = [
  {
    id: "Valido",
    estado: "valido",
  },
  {
    id: "Invalido",
    estado: "Invalido",
  },
];

const pinnedRows: GridPinnedRowsProp = {
  top: [
    {
      id: "Auto ID",
      col1: "Small",
      col2: "TRAMO",
      col3: "Alambre de pua 14 X 500 ML",
      col4: "555123535 - PROTECCION PERSONAL Y BIOSEGURID...",
      col5: " ",
      editable: true,
    },
  ],
  bottom: [
    {
      id: 99,
      col1: "Alambre de pua 14 X 500 ML",
      col2: "Small",
      col3: "TRAMO",
      col4: "555123535 - PROTECCION PERSONAL Y BIOSEGURID...",
      editable: false,
    },
  ],
};

const getRows = () => {
  let lista: GridRowsProp = [];
  for (let index = 0; index < 1000; index++) {
    lista = [
      ...lista,
      {
        id: index,
        col1: "Alambre de pua 14 X 500 ML",
        col2: "Small",
        col3: "TRAMO",
        col4: "555123535 - PROTECCION PERSONAL Y BIOSEGURID...",
        editable: true,
      },
    ];
  }
  return lista;
};

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

export default function DataGridProExample() {
  const apiRef = useGridApiRef();
  const inputRef = React.useRef<HTMLElement>();
  const inputRef2 = React.useRef<HTMLElement>();
  const inputRef3 = React.useRef<HTMLElement>();
  const inputRef4 = React.useRef<HTMLElement>();
  const inputRef5 = React.useRef<HTMLElement>();

  const [editMode, setEditMode] = useState<"row" | "cell">("row");

  useEffect(() => {
    apiRef.current.startRowEditMode({
      id: "Auto ID",
    });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Código",
      width: 100,
      renderCell(params) {
        const idRef= params.value;
        if(idRef !== 'Auto ID')
        return (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href={idRef} target="_blank" rel="noopener noreferrer">
            {idRef}
          </a>
        )
      },
      editable: false,
    },
    {
      field: "col1",
      headerName: "Descripción Insumo",
      width: 300,
      editable: true,
      renderEditCell: (params) => {
        console.log(params);
        inputRef.current?.focus();
        return (
          <TextField
            placeholder="Ingrese descripcion del insumo"
            fullWidth
            inputRef={inputRef}
            focused={params.hasFocus}
          ></TextField>
        );
      },
    },
    {
      field: "col2",
      headerName: "Tipo",
      width: 120,
      editable: true,
      renderEditCell: (params) => {
        if (params.hasFocus) {
          inputRef2.current?.focus();
        }
        return (
          <TextField
            select
            fullWidth
            value={params.value}
            focused={params.hasFocus}
            inputRef={inputRef2}
          >
            {lista.map((option) => {
              return [<MenuItem value={option.id}>{params.value}</MenuItem>];
            })}
          </TextField>
        );
      },
    },
    {
      field: "col3",
      headerName: "U.M",
      width: 150,
      editable: true,
      renderEditCell: (params) => {
        if (params.hasFocus) {
          inputRef3.current?.focus();
        }
        return (
          <TextField
            select
            fullWidth
            value={params.value}
            inputRef={inputRef3}
            focused={params.hasFocus}
          >
            {estadoInsumo.map((insumo) => {
              return [<MenuItem value={insumo.id}>{insumo.estado}</MenuItem>];
            })}
          </TextField>
        );
      },
    },
    {
      field: "col4",
      headerName: "Grupo",
      width: 350,
      editable: true,
      renderEditCell: (params) => {
        if (params.hasFocus) {
          inputRef4.current?.focus();
        }
        return (
          <TextField
            placeholder="Busque grupo de insumo"
            fullWidth
            inputRef={inputRef4}
            focused={params.hasFocus}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <GridSearchIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
        );
      },
    },
    {
      field: "col5",
      type: "actions",
      headerName: "actions",
      width: 150,
      editable: true,
      getActions: () => {
        return [
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GridActionsCellItem
              icon={<ModeEditOutlineIcon fontSize="small" />}
              label="add user"
              className="textPrimary"
              color="inherit"
            />
            <GridActionsCellItem
              icon={<DeleteOutlineIcon fontSize="small" />}
              label="Delete"
              color="inherit"
            />
          </Box>,
        ];
      },
      renderEditCell: (params) => {
        if (params.hasFocus) {
          inputRef5.current?.focus();
        }
        return [
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button color="primary" startIcon={<AddCircleOutlineIcon />}>
            </Button>
          </Box>,
        ];
      },
    },
  ];

  return (
    <Box style={{ height: 400, width: "fit-content" }}>
      <DataGridPro
        rows={getRows()}
        columns={columns}
        checkboxSelection
        onRowClick={(params) => {
          if (params.row.id === "Auto Id") {
            setEditMode("row");
          } else {
            setEditMode("cell");
          }
        }}
        pinnedRows={pinnedRows}
        // density="compact"
        editMode={editMode}
        apiRef={apiRef}
        // showCellVerticalBorder
        // showColumnVerticalBorder
        sx={{
          ".MuiDataGrid-withBorderColor": {
            border: "none",
          },
        }}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
}
