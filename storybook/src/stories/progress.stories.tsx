import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress, ThemeProvider } from "@mui/material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof CircularProgress> = {
    title: "Components/CircularProgress",
    component: CircularProgress,
    decorators: [
        (Story) => (
            <ThemeProvider theme={SincoTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const button: Story = {
    name: "Circular progress",
    render: (args) => (
        <>
            <CircularProgress />
        </>
    ),
};
