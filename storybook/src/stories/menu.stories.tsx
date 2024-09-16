/* eslint-disable react-hooks/rules-of-hooks */
import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ThemeProvider, Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Button } from "@mui/material";
import { Check } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

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
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const MenuStory: Story = {
  name: "menu",
  args: {
    open: false,
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={args.open}
          onClose={handleClose}
        >
          <Paper sx={{ width: 320 }}>
            <MenuList dense={false}>
              <MenuItem onClick={handleClose}>
                <ListItemText inset>Single</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemText inset>1.15</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemText inset>Double</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                Custom: 1.2
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemText>Add space before paragraph</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemText>Add space after paragraph</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemText>Custom spacing...</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        </Menu>
      </div>
    );
  },
};

export const DenseMenu: Story = {
  name: "menu-dense",
  args: {
    open: false,
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button aria-controls="menu-dense" aria-haspopup="true" onClick={handleClick}>
          Open Dense Menu
        </Button>
        <Menu
          id="menu-dense"
          anchorEl={anchorEl}
          open={args.open}
          onClose={handleClose}
        >
          <Paper sx={{ width: 320 }}>
            <MenuList>
              <MenuItem onClick={handleClose}>
                <ListItemText inset>Single</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemText inset>1.15</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemText inset>Double</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                Custom: 1.2
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemText>Add space before paragraph</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemText>Add space after paragraph</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemText>Custom spacing...</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        </Menu>
      </div>
    );
  },
};
