import React, { useCallback, useState } from "react";
import { Button, Checkbox, InputAdornment, ListItemIcon, MenuItem, OutlinedInput, Popover, Stack } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

export interface MultiSelectProps<T> {
    topPanel?: React.ReactNode;
    actions?: React.ReactNode;
    anchorEl: HTMLElement | null;
    dense?: boolean;
    open: boolean;
    items: T[];
    onClose?: () => void;
    handleFilter?: (items: T[], filterValue: string) => T[];
    getItemLabel: (item: T) => string;
    filtrarDesdeComponente?: boolean;
    OnChangeLimpiar?: () => void;
    OnClickLimpiar?: () => void;
    OnChangeAplicar?: () => void;
    OnClickAplicar?: () => void;
}

export function MultiSelect<T>({
    items,
    topPanel,
    actions,
    dense = false,
    anchorEl,
    open,
    onClose,
    handleFilter,
    getItemLabel,
    OnChangeLimpiar,
    OnClickLimpiar,
    OnChangeAplicar,
    OnClickAplicar,
    filtrarDesdeComponente = true,
}: MultiSelectProps<T>) {
    const [filterValue, setFilterValue] = useState<string>("");
    const [selectedItems, setSelectedItems] = useState<T[]>([]);

    const filteredItems = filtrarDesdeComponente
        ? items.filter((item) => getItemLabel(item).toLowerCase().includes(filterValue.toLowerCase()))
        : handleFilter?.(items, filterValue) || items;

    const handleChangeTextField = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFilterValue(e.target.value);
        }, []);

    const handleCheckboxChange = useCallback(
        (item: T) => {
            setSelectedItems((prevSelected) =>
                prevSelected.includes(item)
                    ? prevSelected.filter((selectedItem) => selectedItem !== item)
                    : [...prevSelected, item]
            );
        }, []);

    const handleSelectAll = useCallback(() => {
        const allSelected = selectedItems.length === filteredItems.length;
        setSelectedItems(allSelected ? [] : filteredItems);
    }, [filteredItems, selectedItems]);

    const allSelected = filteredItems.length > 0 && selectedItems.length === filteredItems.length;

    const sortedFilteredItems = [
        ...filteredItems.filter((item) => selectedItems.includes(item)),
        ...filteredItems.filter((item) => !selectedItems.includes(item)),
    ];

    return (
        <Popover
            elevation={8}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            open={open}
            onClose={onClose}
        >
            <Stack height="auto" minWidth="320px">
                <Stack height="auto" py={1} px={2}>
                    {topPanel ? (
                        React.cloneElement(topPanel as React.ReactElement, {
                            setFilterValue
                        })
                    ) : (
                        <OutlinedInput
                            fullWidth
                            size="small"
                            placeholder="Buscar"
                            value={filterValue}
                            onChange={handleChangeTextField}
                            endAdornment={
                                <InputAdornment position="end">
                                        <SearchOutlined fontSize="small" />
                                </InputAdornment>
                            }
                        />
                    )}
                </Stack>

                <Stack height="auto" maxHeight="300px" overflow="auto">
                    {sortedFilteredItems.length > 2 && (
                        <MenuItem  dense={dense} onClick={handleSelectAll}>
                            <ListItemIcon>
                                <Checkbox checked={allSelected} />
                            </ListItemIcon>
                            Todos los items
                        </MenuItem>
                    )}

                    {sortedFilteredItems.length > 0 ? (
                        sortedFilteredItems.map((item) => (
                            <MenuItem key={getItemLabel(item)}  dense={dense} onClick={() => handleCheckboxChange(item)}>
                                <ListItemIcon>
                                    <Checkbox checked={selectedItems.includes(item)} />
                                </ListItemIcon>
                                {getItemLabel(item)}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>No se encontraron resultados</MenuItem>
                    )}
                </Stack>
                {actions && (
                    <Stack px={2} py={1} flexDirection={"row"} justifyContent={"space-between"} >
                        <Button color="primary" variant="text" onChange={OnChangeLimpiar} onClick={OnClickLimpiar}>Limpiar</Button>
                        <Button variant="contained" color="primary" onChange={OnChangeAplicar} onClick={OnClickAplicar}>Aplicar</Button>
                    </Stack>
                )}
            </Stack>
        </Popover>
    );
}
