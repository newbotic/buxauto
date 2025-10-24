import React from 'react';
import { Typography, Box, TextField, Button, Paper } from '@mui/material';

const Contact: React.FC = () => {

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Informații Contact
          </Typography>
          <Typography paragraph>
            Adresa: Strada Exemplu, Nr. 123, București
          </Typography>
          <Typography paragraph>
            Telefon: +40 123 456 789
          </Typography>
          <Typography paragraph>
            Email: contact@buxauto.ro
          </Typography>
          <Typography paragraph>
            Program: Luni - Vineri: 09:00 - 18:00
            <br />
            Sâmbătă: 09:00 - 14:00
            <br />
            Duminică: Închis
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Trimite-ne un mesaj
            </Typography>
            <form>
              <Box sx={{ display: 'grid', gap: 2 }}>
                <TextField fullWidth label="Nume" variant="outlined" />
                <TextField fullWidth label="Email" variant="outlined" type="email" />
                <TextField fullWidth label="Mesaj" variant="outlined" multiline rows={4} />
                <Button variant="contained" color="primary" size="large" fullWidth>
                  Trimite Mesaj
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
