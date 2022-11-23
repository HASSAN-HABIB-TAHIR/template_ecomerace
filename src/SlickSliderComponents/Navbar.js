import { menuItems } from './menuItems1';
import MenuItems from './MenuItems';
import { Box,Container } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
    <nav>
    <Box>
    <ul>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
        </ul>
        </Box>
    </nav>
    </Box>
  );
};

export default Navbar;
