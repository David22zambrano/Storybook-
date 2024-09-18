import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Stack } from "@mui/material";
import { SincoTheme } from "../Theme";
import { AdjuntarArchivo } from "./Adjuntar";
import "./Generales";


const meta: Meta<typeof AdjuntarArchivo> = {
    title: "Sinco React/Adjuntar",
    component: AdjuntarArchivo,
    tags: ["autodocs"],
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
        }
    },
};
export default meta;
type Story = StoryObj<typeof AdjuntarArchivo>;

export const AdjuntarArchivos: Story = {
    name: "Adjuntar archivos",
    args: {
        compact: false,
        fecthDB: ()=>{ console.log}
    },
    render: (args) => {

        return (
            <Stack width={"400px"}>
                <AdjuntarArchivo {...args}  />
            </Stack>

        )
    }
};
