import { Inbox, Mail } from "@mui/icons-material";
import Box from "@mui/material/Box";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
  Drawer,
  Button,
} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ArrowDownward } from "@mui/icons-material";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

import React, { useState } from "react";

import { globalColors } from "../../StylesSource/styles";

type Props = {};

const filters = [
    {
        title: "Price: Low to High",
        icon: <ArrowUpwardIcon/>

    },
    {
        title: "Price: High to Low",
        icon: <ArrowDownward/>
    }, 
    {
        title: "Alphabetical : A-Z",
        icon: <SortByAlphaIcon/>
    },
    {
        title: "Alphabetical : Z-A",
        icon: <SortByAlphaIcon/>
    }

]

export default function Filter({}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
      <List>
        {["Price low to high", "Price high to low"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {filters.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        variant="contained"
        sx={{ mr: 2, backgroundColor: globalColors.red }}
        onClick={toggleDrawer(true)}
      >
        Filter Products
      </Button>
      <Drawer open={open}>
        {DrawerList}
        <Button onClick={toggleDrawer(false)}>Close drawer</Button>
      </Drawer>
    </div>
  );
}
