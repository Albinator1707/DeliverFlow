import {
  AppBar, Box, CssBaseline, Toolbar, Typography, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

import './styles.scss';

function DrawerAppBar() {
  return (
    <div className="header__wrapper">
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#FF5964' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: 'left', color: '#5e5e5e',
            }}
          >
            <Link className="link" to="/create">Deliver Flow</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link className="link" to="/create/order"><Button sx={{ color: '#5e5e5e' }}>Order</Button></Link>
            <Link className="link" to="/create/deliver"><Button sx={{ color: '#5e5e5e' }}> Delivery </Button></Link>
            <Link className="link" to="/requests"><Button sx={{ color: '#5e5e5e' }}> Requests </Button></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default DrawerAppBar;
