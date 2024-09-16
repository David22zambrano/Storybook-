/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Button } from "@mui/material";
import { Check } from "@mui/icons-material";
import { SincoTheme } from "../Theme";
import { useState } from "react";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
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
  argTypes:{
    open:{
      control:"boolean"
    },
   
   
  }
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const MenuStory: Story = {
  name: 'menu',
  args: {
    open: false,
   
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Open menu
        </Button>
        
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Paper sx={{ width: 320 }}>
            <MenuList dense={false}>
              <MenuItem>
                <ListItemText inset>Single</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText inset>1.15</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText inset>Double</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                Custom: 1.2
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemText>Add space before paragraph</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText>Add space after paragraph</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemText>Custom spacing...</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        </Menu>
      </>
    );
  },
};

export const dense: Story = {
  name: "menu-dense",
  render: () => (
    <Paper sx={{ width: 320 }}>
      <MenuList>
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  ),
};
