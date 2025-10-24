import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'primary.contrastText', py: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
            gap: 4,
            alignItems: 'start',
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              BUXAUTO
            </Typography>
            <Typography variant="body2">
              Service auto complet — diagnoza, mecanica, vopsitorie și tinichigerie.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Adresa: Strada Exemplu, Nr. 123, București
            </Typography>
            <Typography variant="body2">Telefon: +40 123 456 789</Typography>
            <Typography variant="body2">Email: contact@buxauto.ro</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Link-uri rapide
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <MuiLink component={RouterLink} to="/" color="inherit" underline="hover">
                Acasa
              </MuiLink>
              <MuiLink component={RouterLink} to="/despre-noi" color="inherit" underline="hover">
                Despre Noi
              </MuiLink>
              <MuiLink component={RouterLink} to="/servicii" color="inherit" underline="hover">
                Servicii
              </MuiLink>
              <MuiLink component={RouterLink} to="/galerie" color="inherit" underline="hover">
                Galerie
              </MuiLink>
              <MuiLink component={RouterLink} to="/contact" color="inherit" underline="hover">
                Contact
              </MuiLink>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Program
            </Typography>
            <Typography variant="body2">Luni - Vineri: 09:00 - 18:00</Typography>
            <Typography variant="body2">Sâmbătă: 09:00 - 14:00</Typography>
            <Typography variant="body2">Duminică: Închis</Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 3, borderTop: 1, borderColor: 'primary.light', pt: 2, textAlign: 'center' }}>
          <Typography variant="caption">© {new Date().getFullYear()} BUXAUTO. Toate drepturile rezervate.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
