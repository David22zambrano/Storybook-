import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Stack, Typography } from "@mui/material";
import { SincoTheme } from "../Theme";
import { AdjuntarArchivo } from "./Adjuntar";
import "./Generales";


const meta: Meta<typeof AdjuntarArchivo> = {
    title: "Sinco React/Adjuntar",
    component: AdjuntarArchivo,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={SincoTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
    argTypes: {
        compact: {
            description: "Modifica la orientacion del componente",
            control: "boolean"
        },
        controlArchivo: {
            description: "controlArchivo: `(archivos: File[]) => any;`"
        }
    },
};
export default meta;
type Story = StoryObj<typeof AdjuntarArchivo>;

export const AdjuntarArchivos: Story = {
    name: "Adjuntar archivos",
    args: {
        compact: false,
        controlArchivo: () => { console.log }
    },
    render: (args) => {
        return (
            <Stack width={"400px"} gap={1}>
                <Typography variant="h6" textAlign="center" >El componente adjuntar se adapta al width del parent contenedor</Typography>
                <AdjuntarArchivo {...args} />
            </Stack>

        )
    }
};
