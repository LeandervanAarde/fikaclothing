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
import { useState } from "react";

import { globalColors } from "../../globals/styles/styles";
import { filters } from "./constants";

export default function Filter() {
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
                <item.icon />
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
