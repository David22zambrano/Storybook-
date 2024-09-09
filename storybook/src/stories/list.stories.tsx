import "./Generales";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Inbox , Drafts } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

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
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const ListStory: Story = {
  name: "List",
  args: {
    dense: false,
  },
  render: (args) => (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List {...args}>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  ),
};
