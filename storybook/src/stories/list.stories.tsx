/* eslint-disable react-hooks/rules-of-hooks */
import "./Generales";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, Avatar, Box } from '@mui/material';
import { Inbox } from "@mui/icons-material";
import { SincoTheme } from "../Theme";
import { useState } from 'react';

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
      description: "Define el texto del subtitulo",
      control: "text"
    },
    children: {
      description: "Controla el contenido del icono o avatar",
      control: 'select',
      options: ["Avatar", "Icono", "Vacio", "checkbox", "Icono y checkBox", "Avatar y checkBox"] 
    },
    title: {
      description: "Define el texto del titulo",
      control: "text"
    },
   
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const ListStory: Story = {
  name: "List",
  args: {
    dense: false,
    children: "Vacio", 
    subheader: "list",
    title: "list"
  },
  render: ({ dense, children, subheader, title }) => {
    const [checked, setChecked] = useState<number[]>([]);

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

    const renderIcon = () => {
      switch (children) {
        case "Avatar":
          return <Avatar sx={{ width: 20, height: 20 }} />;
        case "Icono":
          return <Inbox fontSize="medium" />;
        case "Icono y checkBox":
          return (
            <Box display="flex" alignItems="center" gap={1}>
              <Checkbox edge="start" disableRipple />
              <Inbox fontSize="medium" />
            </Box>
          );
        case "Avatar y checkBox":
          return (
            <Box display="flex" alignItems="center" gap={1}>
              <Checkbox edge="start" disableRipple />
              <Avatar sx={{ width: 20, height: 20 }} />
            </Box>
          );
        case "checkbox":
          return <Checkbox edge="start" disableRipple />;
        default:
          return null;
      }
    };

    return (
      <Stack width="100%" bgcolor="background.paper">
        <List dense={dense}>
          {[0, 1].map((value) => (
            <ListItem key={value}>
              <ListItemButton onClick={handleToggle(value)}>
                <ListItemIcon>
                  {children === "AmboIcono y checkBoxs" ? (
                    <Box display="flex" alignItems="center" gap={1}>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                      <Inbox fontSize="medium" />
                    </Box>
                  ) : (
                    renderIcon()
                  )}
                </ListItemIcon>
                <ListItemText primary={title} secondary={subheader} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    );
  },
};
