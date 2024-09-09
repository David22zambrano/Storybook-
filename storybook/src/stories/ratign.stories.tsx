import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider, Rating, RatingProps } from "@mui/material";
import { SincoTheme } from "../Theme";

export default {
  title: "Components/Rating",
  component: Rating,
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
} as Meta;

const Template: Story<RatingProps> = (args) => {
  const [value, setValue] = useState<number | null>(2);
  return (
    <>
      <Rating name="read-only" value={value} readOnly />
      <Rating name="read-only" size="medium" value={value} readOnly />
      <Rating name="read-only" size="large" value={value} readOnly />
    </>
  );
};

export const ratign = Template.bind({});
