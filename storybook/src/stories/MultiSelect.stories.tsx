import type { Meta, StoryObj } from "@storybook/react";
import { Button, Stack, ThemeProvider } from "@mui/material";
import { useCallback, useState } from "react";
import { SincoTheme } from "../Theme";
import { MultiSelect } from "./MultiSelect";
import "./Generales";


const meta: Meta<typeof MultiSelect> = {
    title: "Sinco React/MultiSelect",
    component: MultiSelect,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={SincoTheme}>
                <div style={{ height: "56px" }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
    argTypes: {
        dense: {
            description: "si es `true` Activa modo dense.",
            control: "boolean"
        },
        items: {
            description: "Array[]: any "
        },
        acciones: {
            description: "Contenedor de acciones."
        },
        anchorEl: {
            description: "Se utiliza para establecer la posición del elemento emergente.",
        },
        open: {
            description: "Si es `true`, se muestra el componente"
        },
        topPanel: {
            description: "Contenedor del encabezado del componente en caso que se desee otro contenido"
        },
        filterFunction: () => { },
        getItemLabel: () => { },
        onClose: () => { },
    },
};
export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const MultiSelectExample: Story = {
    name: "MultiSelect",
    args: {
        dense: false
    },
    render: ({ dense }) => {
        const itemsArray = [
            { id: '1', name: 'Manzana', color: 'Rojo' },
            { id: '2', name: 'Banana', color: 'Amarillo' },
            { id: '3', name: 'Pera', color: 'Verde' },
            { id: '4', name: 'Uva', color: 'Morado' },
        ];

        const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
        const [open, setOpen] = useState(false);

        const handleOpen = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
            setOpen(true);
            setAnchorEl(event.currentTarget);
        }, []);

        const handleClose = useCallback(() => {
            setOpen(false);
            setAnchorEl(null);
        }, []);

        const customFilterFunction = (items: any[], filterText: string): any[] => {
            return items.filter((item) =>
                item.name.toLowerCase().includes(filterText.toLowerCase())
            );
        };
        return (
            <>
                <Button color="primary" size="small" variant="text" onClick={handleOpen}>
                    Ver multiSelect
                </Button>

                <MultiSelect
                    anchorEl={anchorEl}
                    open={open}
                    dense={dense}
                    onClose={handleClose}
                    items={itemsArray}
                    getItemLabel={(item) => item.name}
                    filterFunction={customFilterFunction}
                    acciones={
                        <Stack height={"auto"} flexDirection={"row"} justifyContent={"space-between"} py={2} px={1} >
                            <Button size="small" color="primary" variant="text">
                                Limpiar
                            </Button>
                            <Button size="small" color="primary" variant="contained">
                                Aplicar
                            </Button>
                        </Stack>
                    }
                />

            </>
        )
    }
};
