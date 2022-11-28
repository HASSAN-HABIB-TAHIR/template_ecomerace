import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <div>
      <Header />
      <Box sx={{marginTop:"40px"}}>
        <Outlet />
        </Box>
    </div>
  );
};

export default Layout;
