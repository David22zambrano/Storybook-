import { Button, Checkbox, ListItemIcon, MenuItem, Popover, Stack, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";

export interface MultiSelectProps {
    topPanel?: React.ReactNode;
    acciones?: React.ReactNode;
    anchorEl: HTMLElement | null;
    dense?: boolean;
    open: boolean;
    items: any[];
    onClose?: () => void;
    filterFunction: (items: any[], filtroTexto: string) => any[];
    getItemLabel: (item: any) => string;
}

export const MultiSelect = ({ topPanel, acciones, open, onClose, items, filterFunction, getItemLabel, anchorEl, dense }: MultiSelectProps) => {

    const [filtroTexto, setFiltroTexto] = useState(" ");
    const [itemSeleccionado, setItemSeleccionado] = useState<any[]>([]);

    const filteredItems = filterFunction(items, filtroTexto);

    const controlCambioTextfield = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFiltroTexto(e.target.value);
    }, []);

    const controlItemSeleccionado = useCallback(
        (item: any) => {
            setItemSeleccionado((prevSelected) =>
                prevSelected.includes(item)
                    ? prevSelected.filter((selectedItem) => selectedItem !== item)
                    : [...prevSelected, item]
            );
        },
        []
    );

    const controlSelecionarTodos = useCallback(() => {
        const allSelected = itemSeleccionado.length === filteredItems.length;
        setItemSeleccionado(allSelected ? [] : filteredItems);
    }, [filteredItems, itemSeleccionado]);

    const isAllSelected = filteredItems.length > 0 && itemSeleccionado.length === filteredItems.length;

    const sortedFilteredItems = [
        ...filteredItems.filter((item) => itemSeleccionado.includes(item)),
        ...filteredItems.filter((item) => !itemSeleccionado.includes(item)),
    ];

    return (
        <Popover
            elevation={8}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            onClose={onClose}
        >
            <Stack height="auto" minWidth="320px">
                <Stack height={"auto"} py={2} px={1}>
                    {topPanel ? (
                        topPanel
                    ) : (
                        <TextField
                            fullWidth
                            size="small"
                            label="Buscar"
                            value={filtroTexto}
                            onChange={controlCambioTextfield}
                        />
                    )}
                </Stack>

                <Stack height={"auto"} maxHeight={"300px"} overflow={"auto"} >

                    {sortedFilteredItems.length > 2 && (
                        <MenuItem dense={dense} onClick={controlSelecionarTodos}>
                            <ListItemIcon>
                                <Checkbox checked={isAllSelected} />
                            </ListItemIcon>
                            Todos los items
                        </MenuItem>
                    )}

                    {sortedFilteredItems.length > 0 ? (
                        sortedFilteredItems.map((item, index) => (
                            <MenuItem dense={dense} key={index} onClick={() => controlItemSeleccionado(item)}>
                                <ListItemIcon>
                                    <Checkbox checked={itemSeleccionado.includes(item)} />
                                </ListItemIcon>
                                {getItemLabel(item)}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>No se encontraron resultados</MenuItem>
                    )}
                </Stack>
                {acciones ? (
                    acciones
                ) : (
                    <Stack height={"auto"} flexDirection={"row"} justifyContent={"space-between"} py={2} px={1} >
                        <Button size="small" color="primary" variant="text">
                            Limpiar
                        </Button>
                        <Button size="small" color="primary" variant="contained">
                            Aplicar
                        </Button>
                    </Stack>
                )}
            </Stack>
        </Popover>
    );
};
