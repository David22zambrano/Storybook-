/* eslint-disable react-hooks/rules-of-hooks */
import "./Generales";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material';
import { Delete} from "@mui/icons-material";
import { SincoTheme } from "../Theme";
import { useState } from "react";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
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
  argTypes: {
    dense: {
      description: "Activa o desactiva el modo dense del componente.",
      control: "boolean",
    },
    subheader: {
      description: "Define el texto del subtítulo",
      control: "text",
    },
    children: {
      description: "Activa o inactiva el ícono",
      control: "boolean",
    },
    title: {
      description: "Define el texto del título",
      control: "text",
    },
  
    
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const ListStory: Story = {
  name: "List",
  args: {
    dense: false,
    children: false,
    subheader: "List",
    title: "List",
  },
  render: ({ dense, children, subheader, title }) => {
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    return (
      <Stack width="100%" bgcolor="background.paper">
        <List dense={dense}>
          {[0, 1].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  children && (
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
                  )
                }
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(value)} dense={dense}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.includes(value)}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={title} secondary={subheader} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    );
  },
};
