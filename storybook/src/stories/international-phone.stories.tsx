import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { InternationalPhone } from "../components/international-phone";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof InternationalPhone> = {
  title: "Sinco React/ International Phone",
  component: InternationalPhone,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InternationalPhone>;

export const PhoneStory: Story = {
  name: "PROGRESOOO",
  render: () => (
    <InternationalPhone
      value={""}
      onChange={function (phone: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  ),
};
