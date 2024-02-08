import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   
  export default function Info() {
    return (
      <Menu>
        <MenuHandler>
          <Button>Menu</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>Infooooooo</MenuItem>
         
        </MenuList>
      </Menu>
    );
  }