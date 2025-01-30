import React, { useCallback, useState, useEffect } from 'react';
import {
    Modal,
    Box,
    Typography,
    IconButton,
    Button,
    Stack,
    Theme,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { stateConfig } from './Data';
import { ModalProps } from './interfaces';

export const ModalSinco = ({
    open,
    onCancel,
    onAccept,
    title,
    description,
    state = "info",
    ...props
}: ModalProps) => {

    const [openModal, setOpenModal] = useState(open);

    useEffect(() => {
        setOpenModal(open);
    }, [open]);

    const handleModal = useCallback(() => {
        setOpenModal(prev => !prev);
    }, []);

    const { color, icon, defaultDescription } = stateConfig["info"];

    return (
        <Modal open={openModal} onClose={handleModal} {...props} sx={{
            boxShadow: 8
        }} >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "400px",
                    bgcolor: 'background.paper',
                    borderRadius: "4px",
                    boxShadow: 24,
                }}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="center" >
                    <Stack direction="row" alignItems="center" p={1} gap={1.5}>
                        <Box display="flex" alignItems="center">
                            {icon}
                        </Box>
                        <Typography variant="h6" color="text.primary" >{title}</Typography>
                    </Stack>
                    <IconButton onClick={handleModal}>
                        <Close color='action' />
                    </IconButton>
                </Stack>
                <Stack py={1} px={3} gap={1.5}>
                    <Typography variant="body1" >
                        {description || defaultDescription}
                    </Typography>
                </Stack>
                <Stack direction="row" gap={1} p={1} borderRadius={2} justifyContent="flex-end" bgcolor={(theme: Theme) => theme.palette.grey[50]}
                    sx={{ borderRadius: "4px" }}
                >
                    <Button size="small" variant="text" color="inherit" onClick={onCancel}>
                        Cancelar
                    </Button>
                    <Button size="small" variant="contained" onClick={onAccept} 
                        sx={{
                            backgroundColor: (theme: Theme) => 
                                color === "info" 
                                    ? theme.palette.info.main 
                                    : color === "delete" 
                                    ? theme.palette.error.main 
                                    : color === "warning" 
                                    ? theme.palette.warning.main 
                                    : theme.palette.grey[200],
                        }} >
                        Aceptar
                    </Button>
                </Stack>
            </Box>
        </Modal >
    );
};
