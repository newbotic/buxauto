import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '../components/Footer';

const pages = ['Acasa', 'Despre Noi', 'Servicii', 'Galerie', 'Contact'];
const services = [
  'Diagnoza Auto',
  'Mecanica Auto',
  'Vopsitorie Auto',
  'Tinichigerie Auto',
  'Revizie Auto',
];

const MainLayout = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElServices, setAnchorElServices] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
  const handleOpenServicesMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElServices(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseServicesMenu = () => setAnchorElServices(null);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BUXAUTO
            </Typography>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => page === 'Servicii' ? (
                  <Box key={page} sx={{ display: 'block' }}>
                    {services.map((service) => (
                      <MenuItem
                        key={service}
                        onClick={handleCloseNavMenu}
                        component={Link}
                        to={`/servicii/${service.toLowerCase().replace(' ', '-')}`}
                      >
                        <Typography textAlign="center">{service}</Typography>
                      </MenuItem>
                    ))}
                  </Box>
                ) : (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={page === 'Acasa' ? '/' : `/${page.toLowerCase().replace(' ', '-')}`}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => page === 'Servicii' ? (
                <Box key={page}>
                  <Button onClick={handleOpenServicesMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page}
                  </Button>
                  <Menu
                    anchorEl={anchorElServices}
                    open={Boolean(anchorElServices)}
                    onClose={handleCloseServicesMenu}
                  >
                    {services.map((service) => (
                      <MenuItem
                        key={service}
                        onClick={handleCloseServicesMenu}
                        component={Link}
                        to={`/servicii/${service.toLowerCase().replace(' ', '-')}`}
                      >
                        {service}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={page}
                  component={Link}
                  to={page === 'Acasa' ? '/' : `/${page.toLowerCase().replace(' ', '-')}`}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main content */}
      <Box component="main" sx={{ flex: 1 }}>
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Outlet />
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
