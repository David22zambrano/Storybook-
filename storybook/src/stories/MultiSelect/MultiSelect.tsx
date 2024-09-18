import { Button, Checkbox, ListItemIcon, MenuItem, Popover, Stack, TextField } from "@mui/material";
import { useCallback, useState } from "react";

export interface MultiSelectProps {
    topPanel?: React.ReactNode;
    acciones?: React.ReactNode;
    anchorEl: HTMLElement | null;
    dense?: boolean;
    open: boolean;
    items: any[];
    onClose?: () => void;
    filterFunction: (items: any[], filterText: string) => any[];
    getItemLabel: (item: any) => string;
}

export const MultiSelect = ({ topPanel, acciones, open, onClose, items, filterFunction, getItemLabel, anchorEl, dense }: MultiSelectProps) => {

    const [filterText, setFilterText] = useState(" ");
    const [selectedItems, setSelectedItems] = useState<any[]>([]);

    const filteredItems = filterFunction(items, filterText);

    const handleTextFieldChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
    }, []);

    const handleCheckboxChange = useCallback(
        (item: any) => {
            setSelectedItems((prevSelected) =>
                prevSelected.includes(item)
                    ? prevSelected.filter((selectedItem) => selectedItem !== item)
                    : [...prevSelected, item]
            );
        },
        []
    );

    const handleAllItemsSelected = useCallback(() => {
        const allSelected = selectedItems.length === filteredItems.length;
        setSelectedItems(allSelected ? [] : filteredItems);
    }, [filteredItems, selectedItems]);

    const isAllSelected = filteredItems.length > 0 && selectedItems.length === filteredItems.length;

    const sortedFilteredItems = [
        ...filteredItems.filter((item) => selectedItems.includes(item)),
        ...filteredItems.filter((item) => !selectedItems.includes(item)),
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
                            value={filterText}
                            onChange={handleTextFieldChange}
                        />
                    )}
                </Stack>

                <Stack height={"auto"} maxHeight={"300px"} overflow={"auto"} >

                    {sortedFilteredItems.length > 2 && (
                        <MenuItem dense={dense} onClick={handleAllItemsSelected}>
                            <ListItemIcon>
                                <Checkbox checked={isAllSelected} />
                            </ListItemIcon>
                            Todos los items
                        </MenuItem>
                    )}

                    {sortedFilteredItems.length > 0 ? (
                        sortedFilteredItems.map((item, index) => (
                            <MenuItem dense={dense} key={index} onClick={() => handleCheckboxChange(item)}>
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
