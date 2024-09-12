import { Button, Checkbox, ListItemIcon, MenuItem, Popover, Stack, TextField } from "@mui/material";
import { useCallback, useState } from "react";

export interface MultiSelectProps {
    topPanel?: React.ReactNode;
    actions?: React.ReactNode;
    anchorEl: HTMLElement | null;
    open: boolean;
    items: any[];
    onClose?: () => void;
    filter: (items: any[], filterText: string) => any[];
    getItemLabel: (item: any) => string;
}

export const MultiSelect = ({ topPanel, actions, open, onClose, items, filter, getItemLabel, anchorEl }: MultiSelectProps) => {
    const [filterText, setFilterText] = useState("");
    const [selectedItems, setSelectedItems] = useState<any[]>([]);

    const filteredItems = filter(items, filterText);

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
            <Stack height={"auto"} p={2} minWidth={"320px"}>
                <Stack height={"auto"}>
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

                <Stack height={"auto"} maxHeight={"300px"} overflow={"auto"} mt={2}>
                    <MenuItem onClick={handleAllItemsSelected}>
                        <ListItemIcon>
                            <Checkbox checked={isAllSelected} />
                        </ListItemIcon>
                        Todos los items
                    </MenuItem>

                    {sortedFilteredItems.length > 0 ? (
                        sortedFilteredItems.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleCheckboxChange(item)}>
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
                {actions ? (
                    actions
                ) : (
                    <Stack height={"auto"} flexDirection={"row"} justifyContent={"space-between"} p={1} mt={2}>
                        <Button color="primary" variant="text">
                            Limpiar
                        </Button>
                        <Button color="primary" variant="contained">
                            Aplicar
                        </Button>
                    </Stack>
                )}
            </Stack>
        </Popover>
    );
};
