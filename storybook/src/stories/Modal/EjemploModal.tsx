// ----------------------------------------------Coponente Modal Sinco 
import { useCallback, useState } from "react";
import { Box, Button } from "@mui/material";
import { ModalSinco } from "./Modal";

export const PruebaModal = () => {
    const [open, setOpen] = useState(false);

    const controlCierre = useCallback(() => { 
        setOpen(prev => !prev);
    },[])

    const manejoCancelar =  useCallback(() => {
        setOpen(prev => !prev);
    },[])

    const manejoAceptar = useCallback(() => {
        setOpen(prev => !prev);
    },[])

    return (
        <Box>
            <Button onClick={() => controlCierre()}>Abrir Modal</Button>
            <ModalSinco
                open={open}
                onCancel={manejoCancelar}
                onAccept={manejoAceptar}
                title="Título del Modal "
                
                // Dsto es opcional se desea cambiar descripcion o por defecto trae ya una
                // description="Esta es la descripción del modal." 
                state="warning" // Tipos del modal "warning" | "delete" | "info".
            />

        </Box>
    );
};