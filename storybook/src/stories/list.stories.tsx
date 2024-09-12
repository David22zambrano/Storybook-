import "./Generales";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
      description:" Activa o desactiva el modo dense del componente.",
      control: "boolean",
    },
    subheader:{
      description:" Define el texto del subtitulo",
      control:"text"
    },
    children:{
      description:"Activa o inactiva el icono",
      control: "boolean"
    },
    title:{
      description:" Define el texto del titulo",
      control:"text"
    },
   
    
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const ListStory: Story = {
  name: "List",
  args: {
    dense: false,
    children:false,
    subheader:"list",
    title:"list"
  },
  render: ({dense, children,subheader,title}) => (
    <Stack width="100%"  bgcolor="background.paper">
      <List dense={dense}>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
            {children ? <Inbox fontSize="small" /> : ""}
            </ListItemIcon>
            <ListItemText primary={title} secondary={subheader} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
            {children ? <Drafts fontSize="small" /> : ""}
            </ListItemIcon>
            <ListItemText primary={title} secondary={subheader} />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  ),
};
